import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroAdminService } from '../../hero-admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  ngOnInit(): void {
  }

  public Editor = ClassicEditor;

  constructor(private _adminService: HeroAdminService, private _router: Router) { }




  //Form Control
  course: any = new FormGroup({
    "title": new FormControl(''),
    "code": new FormControl(''),
    "category": new FormControl(''),
    "sub": new FormControl(''),
    "image": new FormControl(''),
    "details": new FormControl(''),
    "duration_months": new FormControl(''),
    "duration_internship": new FormControl(''),
    "mode": new FormControl(''),
    "fees": new FormControl(''),
    "brochure": new FormControl(''),
    "course_certificate": new FormControl(''),
    "internship_certificate": new FormControl(''),
    "placement_list": new FormControl(''),
    "objectives": new FormControl(''),
    "highlights": new FormControl(''),
    "test": new FormControl(''),
    "eligibility": new FormControl(''),
    "agenda": new FormControl(''),
    "fee_detail": new FormControl(''),
    "start_date": new FormControl(''),
    "end_date": new FormControl(''),
    "status": new FormControl(''),
    "thumbnail": new FormControl(''),
    "sponser": new FormControl(''),
    "course_delivery": new FormControl(''),
    "learning_support": new FormControl(''),
    "internship_support": new FormControl(''),

  });



  //functions
  onSubmit() {

    let courseDetails = this.course.value;
    console.log(courseDetails)
    this._adminService.addCourse(courseDetails)
      .subscribe(res => {
        console.log(res)
        if (res) {
          Swal.fire({
            icon: 'success',
            title: ' Added Successfully',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            this._router.navigate(['/admin/courses'])
          })
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Network Error, Please try after sometime',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            this._router.navigate(['/admin/courses'])
          })
        }
      })
  }
}
