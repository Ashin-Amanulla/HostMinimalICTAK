import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {

  constructor() { }

  @Output() emitData = new EventEmitter<String>();
  
  ngOnInit(): void {
  }

  courses='Courses'

  //modal
  showModal = false;
  toggleModal(){
    // alert("true")
    this.showModal = !this.showModal;
  }
}
