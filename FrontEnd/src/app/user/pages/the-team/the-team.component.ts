import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-the-team',
  templateUrl: './the-team.component.html',
  styleUrls: ['./the-team.component.scss']
})
export class TheTeamComponent implements OnInit {

  constructor(  private _router:Router) {}


  ngOnInit(): void {

   }

   singleEmployee(staff:any){
    localStorage.setItem('staffUser', staff.toString())
    this._router.navigate(['/employee'])

  }

}
