import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.css']
})
export class SubNavComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {

  }

  scrollToBottom() {
    window.scroll({ 
        top: 7000, 
        
        behavior: 'smooth' 
    });
  }

}
