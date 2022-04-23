import { Component, OnInit,HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroUserService } from '../../hero-user.service';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import Swal from 'sweetalert2';

import * as AOS from "aos"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
    private _heroService: HeroUserService,
    private _router: Router,
    private _fb: FormBuilder
  ) { }

  KnowMore= 'Know More'
  courses = 'Courses'
  blog = 'Blog'

  ngOnInit(): void {
  }

  bgVariable:boolean=false;
  headerVariable:boolean=false;

  @HostListener('document:scroll')
  onScroll(){
    if(document.body.scrollTop >60 || document.documentElement.scrollTop>60){
      this.bgVariable =true;
      this.headerVariable = true;
    }
    else{
      this.bgVariable =false;
      this.headerVariable = false;
    }
  }


  Subscription: any = new FormGroup({
    'email': new FormControl(''),
  })

  subs(){

    let Subscription = this.Subscription.value;

    this._heroService.saveSubs(Subscription)
    .subscribe(res => {
      console.log(res)
      if (res) {
        Swal.fire({
          icon: 'success',
          title: '  Subscribed!',
          showConfirmButton: false,
          timer: 1500
        })
          .then(() => {
            this._router.navigate(['/'])
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
