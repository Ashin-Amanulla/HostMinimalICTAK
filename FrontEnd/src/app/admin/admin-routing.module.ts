import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddReviewsComponent } from './components/add-reviews/add-reviews.component';
import { AddStaffComponent } from './components/add-staff/add-staff.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { EditReviewComponent } from './components/edit-review/edit-review.component';
import { EditStaffComponent } from './components/edit-staff/edit-staff.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { StaffsComponent } from './pages/staffs/staffs.component';
import { UpdatesComponent } from './pages/updates/updates.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { EditNewsComponent } from './components/edit-news/edit-news.component';
import { BrochureComponent } from './pages/brochure/brochure.component';
import { SubscriptionsComponent } from './pages/subscriptions/subscriptions.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [

      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      },
      {
        path: 'courses', component: CoursesComponent
      },
      {
        path: 'courses/add-course', component: AddCourseComponent
      },
      {
        path: 'courses/edit-course', component: EditCourseComponent
      },
      {
        path: 'staffs', component: StaffsComponent
      },
      {
        path: 'staffs/add-staff', component: AddStaffComponent
      },
      {
        path: 'staffs/edit-staff', component: EditStaffComponent
      },
      {
        path: 'reviews', component: ReviewsComponent
      },
      {
        path: 'reviews/add-review', component: AddReviewsComponent
      },
      {
        path: 'reviews/edit-review', component: EditReviewComponent
      },
      {
        path: 'blogs', component: BlogsComponent
      },
      {
        path: 'blogs/add-blog', component: AddBlogComponent
      },
      {
        path: 'blogs/edit-blog', component: EditBlogComponent
      },
      {
        path: 'news', component: UpdatesComponent
      },
      {
        path: 'news/add-news', component: AddNewsComponent
      },
      {
        path: 'news/edit-news', component: EditNewsComponent
      },
      {
        path: 'brochure', component:BrochureComponent
      },
      {
        path: 'subs', component:SubscriptionsComponent
      },

    ]
  },

];;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
