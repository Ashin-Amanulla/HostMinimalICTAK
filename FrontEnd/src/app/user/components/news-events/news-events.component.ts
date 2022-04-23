import { Component, OnInit } from '@angular/core';
import { HeroUserService } from '../../hero-user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-news-events',
  templateUrl: './news-events.component.html',
  styleUrls: ['./news-events.component.scss']
})
export class NewsEventsComponent implements OnInit {

  constructor(private _heroService:HeroUserService, private _router: Router) { }

  blogs:any 
  new1s: any;

  SelectedItem: any = {
    title: '',
    content: '',
    date: ''
  }


  GetSingleBlog(data: any) {

    let code= data.title.toString()

    localStorage.setItem("singleblog", data._id.toString());
    this._router.navigate(['/singleblog'], { queryParams: { code: code } })
}


  ngOnInit(): void {

    this._heroService.getBlog()
    .subscribe((data: any) => {
      this.blogs = JSON.parse(JSON.stringify(data))


    })

    this._heroService.getNews()
    .subscribe((response:any)=>{
      this.new1s=JSON.parse(JSON.stringify(response))
      
    })


  }

}
