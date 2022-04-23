import { Component, OnInit } from '@angular/core';
import { HeroUserService } from '../../hero-user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-popular-courses',
  templateUrl: './popular-courses.component.html',
  styleUrls: ['./popular-courses.component.scss']
})
export class PopularCoursesComponent implements OnInit {

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
