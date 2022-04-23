import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { HeroAdminService } from '../../hero-admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {


  constructor(private _adminService: HeroAdminService, private _router: Router) { }




  //Form Control
  Associate: any = new FormGroup({
    "name": new FormControl(''),
    "designation": new FormControl(''),
    "employee_code":new FormControl(''),
    "grade":new FormControl(''),
    "division": new FormControl(''),
    "zone": new FormControl(''),
    "photo": new FormControl(''),
    "details": new FormControl(''),
    "mail": new FormControl(''),
    "linkedIn": new FormControl(''),
    "facebook": new FormControl(''),
    "instagram": new FormControl(''),
    "others": new FormControl(''),
    "status": new FormControl(''),
  });



  ngOnInit(): void {
  }


  onSubmit() {
    let associateDetails = this.Associate.value;
    console.log(associateDetails)
    this._adminService.addStaff(associateDetails)
      .subscribe(res => {
        console.log(res)
        if (res) {
          Swal.fire({
            icon: 'success',
            title: ' Added Successfully',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            this._router.navigate(['/admin/staffs'])
          })
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Network Error, Please try after sometime',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            this._router.navigate(['/admin/staffs'])
          })
        }
      })
  }


  //end
}

