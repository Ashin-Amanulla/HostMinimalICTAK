import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  onload: boolean =false;

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => { this.onload = false }, 2000);

  }

  closeModal() {
    this.onload = false;
  }

}
