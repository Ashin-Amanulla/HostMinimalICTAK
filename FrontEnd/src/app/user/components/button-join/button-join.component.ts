import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-join',
  templateUrl: './button-join.component.html',
  styleUrls: ['./button-join.component.css']
})


  
export class ButtonJoinComponent implements OnInit {

  constructor() { }

  @Input() label: string;


  ngOnInit(): void {
  }

}
