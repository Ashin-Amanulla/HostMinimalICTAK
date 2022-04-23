import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroUserService } from '../../hero-user.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  constructor(private _heroService:HeroUserService, private _router: Router) { }

courses:any

  ngOnInit(): void {
    this._heroService.getCourses()
      .subscribe((data: any) => {
        this.courses = JSON.parse(JSON.stringify(data))
      })
  }

  singlePage(code: any) {

    this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this._router.navigate(['/course'],{ queryParams: { code: code }});
    })
  }

}
