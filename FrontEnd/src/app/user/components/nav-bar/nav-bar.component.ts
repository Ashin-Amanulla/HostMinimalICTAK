import { Component, HostListener, OnInit } from '@angular/core';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  navbarOpen = false;
  modalOpen = false;
  courses = 'Courses'

  constructor() { }

  ngOnInit(): void { }

  setModalOpen() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    this.modalOpen = !this.modalOpen;
    // alert('clm')
  }

  closeModal() {
    this.modalOpen = false
  }


  isSticky: boolean = false;






}


