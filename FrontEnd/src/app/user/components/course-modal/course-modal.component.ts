import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeroUserService } from '../../hero-user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-course-modal',
  templateUrl: './course-modal.component.html',
  styleUrls: ['./course-modal.component.scss']
})
export class CourseModalComponent implements OnInit {

  constructor(private _heroService: HeroUserService, private _router: Router) { }

  courses: any;

  @Output() emitData = new EventEmitter<String>();

  ngOnInit(): void {
    this._heroService.getCourses()
      .subscribe((data: any) => {
        this.courses = JSON.parse(JSON.stringify(data))
      })

  }

  singlePage(code: any) {
    this.emitData.emit('hide Modal!');

    this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this._router.navigate(['/course'],{ queryParams: { code: code }});
    })
  }

}

