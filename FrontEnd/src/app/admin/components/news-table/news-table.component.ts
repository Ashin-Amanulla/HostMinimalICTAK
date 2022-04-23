import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroAdminService } from '../../hero-admin.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-news-table',
  templateUrl: './news-table.component.html',
  styleUrls: ['./news-table.component.css']
})
export class NewsTableComponent implements OnInit {

  constructor(private _heroService: HeroAdminService, private _router: Router) { }


  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";




  new1s: any;


  ngOnInit(): void {

    this._heroService.getNews()
      .subscribe((data: any) => {
        this.new1s = JSON.parse(JSON.stringify(data))
      })
  }

  editNews(news: any) {
    localStorage.setItem('news', news._id.toString())

    this._router.navigate(['/admin/news/edit-news'])
  }


  //* drag and drop related 


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.new1s, event.previousIndex, event.currentIndex);
  }

  saveBlogIndex() {
    for (let i = 0; i < this.new1s.length; i++) {
      this.new1s[i].index = i;
      this._heroService.updateBlogIndex(this.new1s[i])
        .subscribe(res => {
          if (res) {
            Swal.fire({
              icon: 'success',
              title: ' Added Successfully',
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              this._router.navigate(['/admin/new1s'])
            })
          }
          else {
            Swal.fire({
              icon: 'error',
              title: 'Network Error, Please try after sometime',
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              this._router.navigate(['/admin/new1s'])
            })
          }
        })
    }

  }

}
