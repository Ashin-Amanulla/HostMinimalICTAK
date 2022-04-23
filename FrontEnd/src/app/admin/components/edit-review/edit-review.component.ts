import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { HeroAdminService } from '../../hero-admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-review',
  templateUrl: './edit-review.component.html',
  styleUrls: ['./edit-review.component.css']
})
export class EditReviewComponent implements OnInit {

  //Form Control
  Reviews: any = new FormGroup({
    "name": new FormControl(''),
    "course": new FormControl(''),
    "photo": new FormControl(''),
    "testimonial": new FormControl(''),
    "designation": new FormControl(''),
    "company": new FormControl(''),
    "reviewer_code": new FormControl(''),
    "place": new FormControl(''),
    "rating": new FormControl('')
  });

  courses: any;
  ratings=[1,2,3,4,5]


  constructor(private _adminService: HeroAdminService, private _router: Router, private _fb: FormBuilder) { }

  ngOnInit(): void {
    this._adminService.getCourses()
      .subscribe((data: any) => {
        this.courses = JSON.parse(JSON.stringify(data))
      })


    let id = localStorage.getItem('review')
    console.log('id ', id)
    this._adminService.getReviewById(id)
      .subscribe((res) => {
        this.Reviews = this._fb.group({
          "name": res.name,
          "course": res.course,
          "photo": res.photo,
          "testimonial": res.testimonial,
          "designation": res.designation,
          "company": res.company,
          "reviewer_code": res.reviewer_code,
          "place": res.place,
          "rating": res.rating
        })

      })
  }


  onSave() {
    let id = localStorage.getItem('review')

    let reviewDetails = this.Reviews.value;

    this._adminService.editReview(reviewDetails, id)
      .subscribe(res => {
        if (res) {
          Swal.fire({
            icon: 'success',
            title: ' Updated Successfully',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            localStorage.removeItem('review')
            this._router.navigate(['/admin/reviews'])
          })
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Network Error, Please try after sometime',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            localStorage.removeItem('review')
            this._router.navigate(['/admin/reviews'])
          })
        }
      })
  }


  //delete
  deleteReview() {
    let id = localStorage.getItem('review')
    console.log()
    this._adminService.deleteReview(id)
      .subscribe((res: any) => {
        if (res.status) {
          Swal.fire({
            icon: 'success',
            title: ' Deleted Successfully',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            localStorage.removeItem('review')
            this._router.navigate(['/admin/review'])
          })
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Network Error, Please try after sometime',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            localStorage.removeItem('review')
            this._router.navigate(['/admin/review'])
          })
        }
      })
  }




}
