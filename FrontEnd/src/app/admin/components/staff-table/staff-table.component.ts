import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroAdminService } from '../../hero-admin.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-staff-table',
  templateUrl: './staff-table.component.html',
  styleUrls: ['./staff-table.component.css']
})
export class StaffTableComponent implements OnInit {

  constructor(private _heroService: HeroAdminService, private _router: Router) { }

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";




  staffs: any;


  ngOnInit(): void {

    this._heroService.getStaffs()
      .subscribe((data: any) => {
        this.staffs = JSON.parse(JSON.stringify(data))
      })
  }

  editStaff(staff: any) {
    localStorage.setItem('staff', staff._id.toString())
    this._router.navigate(['/admin/staffs/edit-staff'])
  }


  //* drag and drop related 


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.staffs, event.previousIndex, event.currentIndex);
  }

  saveStaffIndex() {
    for (let i = 0; i < this.staffs.length; i++) {
      this.staffs[i].index = i;
      this._heroService.updateStaffIndex(this.staffs[i])
        .subscribe(res => {
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

  }



}
