import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { HeroAdminService } from '../../hero-admin.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-reviews',
  templateUrl: './add-reviews.component.html',
  styleUrls: ['./add-reviews.component.css']
})
export class AddReviewsComponent implements OnInit {

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
  constructor(private _adminService: HeroAdminService, private _router: Router) { }

  ngOnInit(): void {
    this._adminService.getCourses()
      .subscribe((data: any) => {
        this.courses = JSON.parse(JSON.stringify(data))
      })
  }


  onSubmit() {
    let reviewDetails = this.Reviews.value;
    console.log(reviewDetails)
    this._adminService.addReview(reviewDetails)
      .subscribe(res => {
        console.log(res)
        if (res) {
          Swal.fire({
            icon: 'success',
            title: ' Added Successfully',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
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
            this._router.navigate(['/admin/reviews'])
          })
        }
      })
  }
}
