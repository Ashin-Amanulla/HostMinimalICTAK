import { Component, Input, OnInit } from '@angular/core';
import { HeroAdminService } from '../../hero-admin.service';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';




@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";



  constructor(private _heroService: HeroAdminService, private _router: Router) { }

  courses: any;

  ngOnInit(): void {
    this._heroService.getCourses()
      .subscribe((data: any) => {
        this.courses = JSON.parse(JSON.stringify(data))
      })
  }

  // edit 
  editCourse(course: any) {
    localStorage.setItem('course', course._id.toString())
    this._router.navigate(['/admin/courses/edit-course'])

  }

  //* drag and drop related 


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.courses, event.previousIndex, event.currentIndex);
  }

  saveCourseIndex() {
    for (let i = 0; i < this.courses.length; i++) {
      this.courses[i].index = i;
      this._heroService.updateCourseIndex(this.courses[i])
        .subscribe(res => {
          if (res) {
            Swal.fire({
              icon: 'success',
              title: ' Added Successfully',
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              this._router.navigate(['/admin/courses'])
            })
          }
          else {
            Swal.fire({
              icon: 'error',
              title: 'Network Error, Please try after sometime',
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              this._router.navigate(['/admin/courses'])
            })
          }
        })
    }

  }



}



