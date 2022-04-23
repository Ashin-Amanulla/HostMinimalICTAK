import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class HeroAdminService {

  constructor(private http: HttpClient) { }

  server_address: string ='/api';
  // server_address: string = "http://localhost:8887/api"


  //Course
  getCourses() {
    return this.http.get<any>(`${this.server_address}/course/getCourses`);
  };

  addCourse(course: any) {
    return this.http.post<any>(`${this.server_address}/course/addCourse`, course);
  }

  getCourseById(id:any) {
    return this.http.post<any>(`${this.server_address}/course/getCoursebyId`,{id:id});
  }

  editCourse(course: any,id:any) {
    return this.http.post<any>(`${this.server_address}/course/updateCourse`, {course:course,id:id});
  }

  deleteCourse(id:any) {
    return this.http.post<any>(`${this.server_address}/course/deleteCourse`,{id:id});
  }

  updateCourseIndex(course: any) {
    return this.http.put(`${this.server_address}/course/updateIndex`, course);
  };


  //Staffs

  getStaffs() {
    return this.http.get<any>(`${this.server_address}/staff/getStaffs`);
  };

  addStaff(staff: any) {
    return this.http.post<any>(`${this.server_address}/staff/addStaff`, staff);
  }

  getStaffById(id:any) {
    return this.http.post<any>(`${this.server_address}/staff/getStaffById`,{id:id});
  }

  editStaff(staff: any,id:any) {
    console.log(staff)
    return this.http.post<any>(`${this.server_address}/staff/updateStaff`, {staff:staff,id:id});
  }

  deleteStaff(id:any) {
    return this.http.post<any>(`${this.server_address}/staff/deleteStaff`,{id:id});
  }

  updateStaffIndex(staff: any) {
    return this.http.put(`${this.server_address}/staff/updateIndex`, staff);
  };

//reviews


getReviews() {
  return this.http.get<any>(`${this.server_address}/review/getReviews`);
};

addReview(review: any) {
  return this.http.post<any>(`${this.server_address}/review/addReview`, review);
}

getReviewById(id:any) {
  return this.http.post<any>(`${this.server_address}/review/getReviewById`,{id:id});
}

editReview(review: any,id:any) {
  return this.http.post<any>(`${this.server_address}/review/updateReview`, {review:review,id:id});
}

deleteReview(id:any) {
  return this.http.post<any>(`${this.server_address}/review/deleteReview`,{id:id});
}

//Blogs

getBlogs() {
  return this.http.get<any>(`${this.server_address}/blog/getBlogs`);
};

addBlog(blog: any) {
  return this.http.post<any>(`${this.server_address}/blog/addBlog`, blog);
}

getBlogById(id:any) {
  return this.http.post<any>(`${this.server_address}/blog/getBlogById`,{id:id});
}

editBlog(blog: any,id:any) {
  return this.http.post<any>(`${this.server_address}/blog/updateBlog`, {blog:blog,id:id});
}

deleteBlog(id:any) {
  return this.http.post<any>(`${this.server_address}/blog/deleteBlog`,{id:id});
}

updateBlogIndex(blog: any) {
  return this.http.put(`${this.server_address}/blog/updateIndex`, blog);
};


//News

getNews() {
  return this.http.get<any>(`${this.server_address}/news/getNews`);
};

addNews(news: any) {
  return this.http.post<any>(`${this.server_address}/news/addNews`, news);
}

getNewsById(id:any) {
  return this.http.post<any>(`${this.server_address}/news/getNewsById`,{id:id});
}

editNews(news: any,id:any) {
  return this.http.post<any>(`${this.server_address}/news/updateNews`, {news:news,id:id});
}

deleteNews(id:any) {
  return this.http.post<any>(`${this.server_address}/news/deleteNews`,{id:id});
}

updateNewsIndex(news: any) {
  return this.http.put(`${this.server_address}/news/updateIndex`, news);
};

//Brochures
getBrochures() {
  return this.http.get<any>(`${this.server_address}/course/getBrochures`);
};

//Subscriptions
getSubscriptions() {
  return this.http.get<any>(`${this.server_address}/news/getSubscriptions`);
};
}
