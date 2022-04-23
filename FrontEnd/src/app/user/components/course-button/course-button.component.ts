import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-button',
  templateUrl: './course-button.component.html',
  styleUrls: ['./course-button.component.css']
})
export class CourseButtonComponent implements OnInit {


  constructor() { }

  @Input() label: string;

  @Output() onClick = new EventEmitter<any>();

  onClickButton(event: any) {
      this.onClick.emit(event);
    }

  ngOnInit(): void {
  }

}
