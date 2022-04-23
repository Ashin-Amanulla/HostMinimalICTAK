import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroAdminService } from '../../hero-admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  public Editor = ClassicEditor;
  constructor(private _adminService: HeroAdminService, private _router: Router, private _fb: FormBuilder) { }
  //Form Control
  blog: any = new FormGroup({

    "title": new FormControl(''),
    "date": new FormControl(''),
    "tags": new FormControl(''),
    "image": new FormControl(''),
    "content": new FormControl(''),
  })


  ngOnInit(): void {

    let id = localStorage.getItem('blog')
    console.log(id, "id")
    this._adminService.getBlogById(id)
      .subscribe((res) => {

        this.blog = this._fb.group({

          "title": res.title,
          "date": res.date,
          "tags": res.tags,
          "image": res.image,
          "content": res.content,

        })
      })
  }



  // edit 

  onSave() {
    let id = localStorage.getItem('blog')

    let blogDetails = this.blog.value;
    console.log(blogDetails)
    this._adminService.editBlog(blogDetails, id)
      .subscribe(res => {
        console.log(res)
        if (res) {
          Swal.fire({
            icon: 'success',
            title: ' Updated Successfully',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            localStorage.removeItem('blog')
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
            localStorage.removeItem('blog')
            this._router.navigate(['/admin/blogs'])
          })
        }
      })
  }


  //delete
  deleteBlog() {

    let id = localStorage.getItem('blog')

    this._adminService.deleteBlog(id)
      .subscribe((res: any) => {
        if (res.status) {
          Swal.fire({
            icon: 'success',
            title: ' Deleted Successfully',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            localStorage.removeItem('blog')
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
            localStorage.removeItem('blog')
            this._router.navigate(['/admin/blogs'])
          })
        }
      })
  }



}
