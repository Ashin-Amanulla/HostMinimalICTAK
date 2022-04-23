import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroAdminService } from '../../hero-admin.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  public Editor = ClassicEditor;

  constructor(private _adminService: HeroAdminService, private _router: Router) { }

  ngOnInit(): void {
  }



  //Form Control
  blog: any = new FormGroup({

    "title": new FormControl(''),
    "date": new FormControl(''),
    "tags": new FormControl(''),
    "image": new FormControl(''),
    "content": new FormControl(''),
    
  })


  onSubmit() {

    let blogDetails = this.blog.value;
    console.log(blogDetails)
    this._adminService.addBlog(blogDetails)
      .subscribe(res => {
        console.log(res)
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
