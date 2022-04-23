import { Component } from '@angular/core';
import * as AOS from 'aos'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ICT Academy of Kerala';
  mobileScreen=true

  ngOnInit(): void {
    if (window.screen.width < 500) { // 768px portrait
      this.mobileScreen = false;
    }
    AOS.init();
  }
}
