import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {

  constructor() { }

  isChecked: boolean = false

  ngOnInit(): void {
  }


  toggleNav() {
    this.isChecked = false
    console.log('clicked')
  }

}
