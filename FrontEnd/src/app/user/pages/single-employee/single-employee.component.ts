import { Component, OnInit } from '@angular/core';
import { HeroUserService } from '../../hero-user.service';

@Component({
  selector: 'app-single-employee',
  templateUrl: './single-employee.component.html',
  styleUrls: ['./single-employee.component.scss']
})
export class SingleEmployeeComponent implements OnInit {

  constructor(private _heroService: HeroUserService) { }

  staff:any

  ngOnInit(): void {

    let id = localStorage.getItem('staffUser')
    this._heroService.getStaffById(id)
      .subscribe((data) => {

        this.staff=data;
        console.log(this.staff)
      })
  }
}
