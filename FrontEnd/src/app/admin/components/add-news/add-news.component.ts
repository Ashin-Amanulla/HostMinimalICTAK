import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroAdminService } from '../../hero-admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  public Editor = ClassicEditor;

  constructor(private _adminService: HeroAdminService, private _router: Router) { }

  ngOnInit(): void {
  }

    //Form Control
    News: any = new FormGroup({

      "title": new FormControl(''),
      "date": new FormControl(''),
      "content": new FormControl(''),
  })


  onSubmit() {

    let newsDetails = this.News.value;
    this._adminService.addNews(newsDetails)
      .subscribe(res => {
        console.log(res)
        if (res) {
          Swal.fire({
            icon: 'success',
            title: ' Added Successfully',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            this._router.navigate(['/admin/news'])
          })
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Network Error, Please try after sometime',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            this._router.navigate(['/admin/news'])
          })
        }
      })
  }

}
