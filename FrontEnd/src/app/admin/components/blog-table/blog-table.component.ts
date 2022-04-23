import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroAdminService } from '../../hero-admin.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import Swal from 'sweetalert2';





@Component({
  selector: 'app-blog-table',
  templateUrl: './blog-table.component.html',
  styleUrls: ['./blog-table.component.css']
})
export class BlogTableComponent implements OnInit {

  constructor(private _heroService: HeroAdminService, private _router: Router) { }


  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";




  blogs: any;


  ngOnInit(): void {

    this._heroService.getBlogs()
      .subscribe((data: any) => {
        this.blogs = JSON.parse(JSON.stringify(data))
      })
  }

  editBlog(blog: any) {
    localStorage.setItem('blog', blog._id.toString())
    
    this._router.navigate(['/admin/blogs/edit-blog'])
  }


  //* drag and drop related 


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.blogs, event.previousIndex, event.currentIndex);
  }

  saveBlogIndex() {
    for (let i = 0; i < this.blogs.length; i++) {
      this.blogs[i].index = i;
      this._heroService.updateBlogIndex(this.blogs[i])
        .subscribe(res => {
          if (res) {
            Swal.fire({
              icon: 'success',
              title: ' Added Successfully',
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              this._router.navigate(['/admin/blogs'])
            })
          }
          else {
            Swal.fire({
              icon: 'error',
              title: 'Network Error, Please try after sometime',
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              this._router.navigate(['/admin/blogs'])
            })
          }
        })
    }

  }

}
