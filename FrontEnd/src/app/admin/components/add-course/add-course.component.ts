import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from "@angular/forms";
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

  constructor(private _adminService: HeroAdminService, private _router: Router,private fb:FormBuilder) { 

  }




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
       "showboxArray":this.fb.array([])

  });

  newInputs():FormArray{
    return this.course.get("showboxArray") as FormArray
  }

  newShowboxImages():FormGroup{
    return this.fb.group({
      sbImages: new FormControl ("")
    })
  }


  addFormInput(){
    this.newInputs().push(this.newShowboxImages());
  }

  removeInputField(i:number){
    this.newInputs().removeAt(i);
  }

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
