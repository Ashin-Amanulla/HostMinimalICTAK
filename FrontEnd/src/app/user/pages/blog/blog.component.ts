import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroUserService } from '../../hero-user.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogDatas: any
  
  constructor(
    public API_serve: HeroUserService,
    public router: Router,
    public ActRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.API_serve.getBlog().subscribe((data) => {
       this.blogDatas = data
     })
  }
  
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
}

  GetSingleBlog(data: any) {
    let code= data.title.toString()
    localStorage.setItem("singleblog", data._id.toString());
    this.router.navigate(['/singleblog'], { queryParams: { code: code } })
  }
  
  
}
