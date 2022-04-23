import { Component, OnInit } from '@angular/core';
import { HeroUserService } from '../../hero-user.service';

@Component({
  selector: 'app-memberships',
  templateUrl: './memberships.component.html',
  styleUrls: ['./memberships.component.css']
})
export class MembershipsComponent implements OnInit {

  academic = 'View Members'
  Register = 'Register Now'
  partner1 = "Brochure"


  ams:any;

  constructor(private _hero: HeroUserService) { }

  ngOnInit(): void {

    this._hero.getAM()
      .subscribe((data) => {
        this.ams=data
    })
}
}
