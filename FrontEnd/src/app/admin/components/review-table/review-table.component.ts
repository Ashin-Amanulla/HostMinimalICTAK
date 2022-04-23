import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroAdminService } from '../../hero-admin.service';


@Component({
  selector: 'app-review-table',
  templateUrl: './review-table.component.html',
  styleUrls: ['./review-table.component.css']
})
export class ReviewTableComponent implements OnInit {


  constructor(private heroService: HeroAdminService, private router: Router) { }

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";



  reviews: any


  ngOnInit(): void {

    this.heroService.getReviews()
      .subscribe((data: any) => {
        this.reviews = JSON.parse(JSON.stringify(data))
      })
  }

  editReview(review: any) {
    localStorage.setItem('review', review._id.toString())
    this.router.navigate(['/admin/reviews/edit-review'])
  }
}
