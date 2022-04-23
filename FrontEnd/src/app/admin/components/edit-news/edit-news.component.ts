import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroAdminService } from '../../hero-admin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  public Editor = ClassicEditor;
  constructor(private _adminService: HeroAdminService, private _router: Router, private _fb: FormBuilder) { }
  //Form Control
  News: any = new FormGroup({

    "title": new FormControl(''),
    "date": new FormControl(''),
    "content": new FormControl(''),
  })


  ngOnInit(): void {

    let id = localStorage.getItem('news')
    this._adminService.getNewsById(id)
      .subscribe((res) => {

        this.News = this._fb.group({

          "title": res.title,
          "date": res.date,
          "content": res.content,

        })
      })
  }



  // edit 

  onSave() {
    let id = localStorage.getItem('news')

    let newsDetails = this.News.value;
    this._adminService.editNews(newsDetails, id)
      .subscribe(res => {
        console.log(res)
        if (res) {
          Swal.fire({
            icon: 'success',
            title: ' Updated Successfully',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            localStorage.removeItem('news')
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
            localStorage.removeItem('news')
            this._router.navigate(['/admin/news'])
          })
        }
      })
  }


  //delete
  deleteNews() {

    let id = localStorage.getItem('news')

    this._adminService.deleteNews(id)
      .subscribe((res: any) => {
        if (res.status) {
          Swal.fire({
            icon: 'success',
            title: ' Deleted Successfully',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            localStorage.removeItem('news')
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
            localStorage.removeItem('news')
            this._router.navigate(['/admin/news'])
          })
        }
      })
  }


}
