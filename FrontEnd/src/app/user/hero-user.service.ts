import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class HeroUserService {



  server_address: string ='/api';
  // server_address: string = "http://localhost:8887/api"

    constructor(private http: HttpClient) { }

  
  //Course
  getCourses() {
    return this.http.get<any>(`${this.server_address}/course/getCourses`);
  };

  getCourseByCode(code:any){
    return this.http.post<any>(`${this.server_address}/course/getCourseByCode`,{'code':code});

  }


  regSubmit(course: any,courseTitle: any){
    
    return this.http.post(`${this.server_address}/course/courseRegister`,{"c":course,"ct":courseTitle});
  }

 //Blog
  getBlog() {
    return this.http.get<any>(`${this.server_address}/blog/getBlogs`);
  }

  getBlogDetails(id: any) {
    return this.http.post<any>(`${this.server_address}/blog/getBlogById`,{'id':id})
  }

  AddComment(data:any) {
    return this.http.post<any>(`${this.server_address}/blog/addComment`,data)
  }


  //Staffs
  getStaffs() {
    return this.http.get<any>(`${this.server_address}/staff/getStaffs`);
  };

  getStaffById(id:any) {
    return this.http.post<any>(`${this.server_address}/staff/getStaffById`,{id:id});
  }


  //reviews
  getReviews(course:any){
    return this.http.post<any>(`${this.server_address}/review/getReviewByCourse`,{course:course});

  }

  //news

  getNews(){
    return this.http.get<any>(`${this.server_address}/news/getNews`);
  }


  //AM
  getAM(){
    return this.http.get<any>(`${this.server_address}/am/getAM`);

  }


  //brochure
  getBrochure(brochure:any){
    return this.http.post<any>(`${this.server_address}/course/brochure`,{brochure:brochure});

  }

   //SUbscriptions
   saveSubs(subscription:any){
    return this.http.post<any>(`${this.server_address}/news/saveSubs`,{subscription:subscription});

  }
}
