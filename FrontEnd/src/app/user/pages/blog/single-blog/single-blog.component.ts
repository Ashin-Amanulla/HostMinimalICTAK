import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroUserService } from 'src/app/user/hero-user.service';
import Swal from 'sweetalert2'




@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss']
})
export class SingleBlogComponent implements OnInit {

  singleBlog: any

  blogDatas: any

  commentData: any
  finalCount: any
  data = {
    comment: ""
  }
  constructor(
    public API_serve: HeroUserService,
    public Act_route: ActivatedRoute,
    public router: Router

  ) { }

  ngOnInit(): void {

    //singleblog
    let blogID = localStorage.getItem('singleblog')
    this.API_serve.getBlogDetails(blogID).subscribe((res) => {
      this.singleBlog = res;
    })


    //comment
    this.API_serve.getBlog().subscribe((ans) => {
      this.commentData = ans

      let count = this.commentData.length
      this.finalCount = count
      console.log("data", this.finalCount)
    })

    //newerPost
    this.API_serve.getBlog().subscribe((data) => {
      this.blogDatas = data
    })

  }

  AddComment() {
    console.log("data vannee", this.data)
    this.API_serve.AddComment(this.data).subscribe((data) => {
      if (data) {
        console.log("Successfully Added!")
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Successfully Added',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          window.location.reload();
        })

      }
      else {
        console.log("Network Error!")
      }
    })
  }



  GetSingleBlog(data: any) {
    localStorage.setItem("singleblog", data._id.toString());
    let code = data.title.toString()
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/singleblog'], { queryParams: { code: code } })


    })
  }
}
