import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dwnld-btn',
  templateUrl: './dwnld-btn.component.html',
  styleUrls: ['./dwnld-btn.component.scss']
})
export class DwnldBtnComponent implements OnInit {

  constructor() { }
  download = 'Download'
  ngOnInit(): void {
  }

}
