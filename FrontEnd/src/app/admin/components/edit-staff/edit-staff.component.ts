import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { HeroAdminService } from '../../hero-admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.css']
})
export class EditStaffComponent implements OnInit {

  constructor(private _adminService: HeroAdminService, private _router: Router, private _fb: FormBuilder) { }



  //Form Control
  Associate: any = new FormGroup({
    "name": new FormControl(''),
    "designation": new FormControl(''),
    "employee_code":new FormControl(''),
    "grade":new FormControl(''),
    "division": new FormControl(''),
    "photo": new FormControl(''),
    "zone": new FormControl(''),
    "details": new FormControl(''),
    "mail": new FormControl(''),
    "linkedIn": new FormControl(''),
    "facebook": new FormControl(''),
    "instagram": new FormControl(''),
    "others": new FormControl(''),
    "status": new FormControl(''),
  });


  ngOnInit(): void {

    let id = localStorage.getItem('staff')
    this._adminService.getStaffById(id)
      .subscribe((res) => {

        this.Associate = this._fb.group({
          "name": res.name,
          "designation": res.designation,
          "employee_code":res.employee_code,
          "grade":res.grade,
          "division": res.division,
          "photo": res.photo,
          "zone": res.zone,
          "details": res.details,
          "mail": res.mail,
          "linkedIn": res.linkedIn,
          "facebook": res.facebook,
          "instagram": res.instagram,
          "others": res.others,
          "status": res.status,
        })
      })
  }


  onSave() {
    let id = localStorage.getItem('staff')

    let staffDetails = this.Associate.value;

    this._adminService.editStaff(staffDetails, id)
      .subscribe(res => {
        if (res) {
          Swal.fire({
            icon: 'success',
            title: ' Updated Successfully',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            localStorage.removeItem('staff')
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
            localStorage.removeItem('staff')
            this._router.navigate(['/admin/staffs'])
          })
        }
      })
  }


  //delete
  deleteStaff(event:any) {
    event.preventDefault();

    let id = localStorage.getItem('staff')

    

    this._adminService.deleteStaff(id)
      .subscribe((res: any) => {
        if (res.status) {
          Swal.fire({
            icon: 'success',
            title: ' Deleted Successfully',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            localStorage.removeItem('staff')
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
            localStorage.removeItem('staff')
            this._router.navigate(['/admin/staffs'])
          })
        }
      })
  }
}

