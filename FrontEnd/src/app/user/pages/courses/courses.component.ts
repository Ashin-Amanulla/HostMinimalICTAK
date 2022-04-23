import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroUserService } from '../../hero-user.service';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import Swal from 'sweetalert2';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
    private _heroService: HeroUserService,
    private _router: Router,
    private _fb: FormBuilder
  ) { }

  course: any;
  code: any;
  inputDisable: boolean = true

  Join = 'Register Now!'
  Coming = 'Coming Soon!'

  reviews: any
  averageReview: any
  avgRound: any

  courseSelected: any
  courseFee: Number

  BrochureReg: any = new FormGroup({
    'name': new FormControl(''),
    'email': new FormControl(''),
    'phoneno': new FormControl(''),
    'qualification': new FormControl(''),
  })



  ngOnInit(): void {

    this._route.queryParams
      .subscribe((params) => {
        this.code = params['code'];


        this._heroService.getCourseByCode(this.code)
          .subscribe(data => {
            this.course = data;
            console.log('type', typeof (this.course[0]), this.course[0])

            //to get reviews
            this._heroService.getReviews(this.course[0].title)
              .subscribe((review: any) => {
                this.reviews = review;
                console.log('reviews',this.reviews)


                var sum = 0;
                var avg = 0
                for (var i = 0; i < this.reviews.length; i++) {
                  sum += parseInt(this.reviews[i].rating, 10); //don't forget to add the base
                }

                avg = sum / this.reviews.length
                this.averageReview = avg
                console.log("ghfht",this.averageReview)
                this.avgRound = Math.round(avg)
              });

          })
      })

  }



  //Course Registration
  outsideLink() {

    window.open("https://retail.ictkerala.org/registration/", "_blank");

  }

  brochureReg() {


    let brochureReg = this.BrochureReg.value;
    this._heroService.getBrochure(brochureReg)
      .subscribe(res => {
        console.log(res)
        if (res) {
          Swal.fire({
            icon: 'success',
            title: '  Sent',
            showConfirmButton: false,
            timer: 1500
          })
            .then(() => {
              window.open(this.course?.[0].course_brochure , "_blank");
            })
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Network Error, Please try after sometime',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            this._router.navigate(['/'])
          })
        }
      })

  }

}
