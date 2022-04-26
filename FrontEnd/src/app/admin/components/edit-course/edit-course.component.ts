import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from "@angular/forms";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroAdminService } from '../../hero-admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  public Editor = ClassicEditor;
  constructor(private _adminService: HeroAdminService, private _router: Router, private fb: FormBuilder) { }



  //Form Control
  EditCourse: any = new FormGroup({
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



  ngOnInit(): void {

    let id = localStorage.getItem('course')
    console.log(id, "id")
    this._adminService.getCourseById(id)
      .subscribe((res) => {


        
          let shws = res.showboxArray       
          let shwControl = <FormArray>this.EditCourse.controls.showboxArray;
          console.log('shws',shws)
          shws.forEach((element: any) => {
            shwControl.push(this.fb.group({sbImages:element.sbImages}))
          });
        
      

        this.EditCourse = this.fb.group({
          "title": res.title,
          "code": res.code,
          "category": res.category,
          "sub": res.sub,
          "image": res.image,
          "details": res.details,
          "duration_months": res.duration_months,
          "duration_internship": res.duration_internship,
          "mode": res.mode,
          "fees": res.fees,
          "brochure": res.brochure,
          "course_certificate": res.course_certificate,
          "internship_certificate": res.internship_certificate,
          "placement_list": res.placement_list,
          "objectives": res.objectives,
          "highlights": res.highlights,
          "test": res.test,
          "eligibility": res.eligibility,
          "agenda": res.agenda,
          "fee_detail": res.fee_detail,
          "start_date": res.start_date,
          "end_date": res.end_date,
          "status": res.status,
          "thumbnail": res.thumbnail,
          "showboxArray": shwControl
        })


        console.log("value",this.EditCourse.value)

      })

  }


  //add shbx

  newInputs(): FormArray {
    return this.EditCourse.get("showboxArray") as FormArray
  }

  newShowboxImages(): FormGroup {
    return this.fb.group({
      sbImages: new FormControl("")
    })
  }


  addFormInput() {
    this.newInputs().push(this.newShowboxImages());
  }

  removeInputField(i: number) {
    this.newInputs().removeAt(i);
  }


  // edit 

  onSave() {
    let id = localStorage.getItem('course')

    let courseDetails = this.EditCourse.value;
    console.log('courseDetails', courseDetails)
    this._adminService.editCourse(courseDetails, id)
      .subscribe(res => {
        console.log(res)
        if (res) {
          Swal.fire({
            icon: 'success',
            title: ' Updated Successfully',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            localStorage.removeItem('course')
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
            localStorage.removeItem('course')
            this._router.navigate(['/admin/course'])
          })
        }
      })
  }


  //delete
  deleteCourse() {

    let id = localStorage.getItem('course')

    this._adminService.deleteCourse(id)
      .subscribe((res: any) => {
        if (res.status) {
          Swal.fire({
            icon: 'success',
            title: ' Deleted Successfully',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            localStorage.removeItem('course')
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
            localStorage.removeItem('course')
            this._router.navigate(['/admin/course'])
          })
        }
      })
  }
}


