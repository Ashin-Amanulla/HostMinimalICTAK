import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { DragDropModule,moveItemInArray  } from '@angular/cdk/drag-drop';
//router
import { AdminRoutingModule } from './admin-routing.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


//admin components
import { AdminNavbarComponent } from "./components/navbars/admin-navbar/admin-navbar.component";
import { AuthNavbarComponent } from "./components/navbars/auth-navbar/auth-navbar.component";
import { CardPageVisitsComponent } from "./components/cards/card-page-visits/card-page-visits.component";
import { CardProfileComponent } from "./components/cards/card-profile/card-profile.component";
import { CardSettingsComponent } from "./components/cards/card-settings/card-settings.component";
import { CardSocialTrafficComponent } from "./components/cards/card-social-traffic/card-social-traffic.component";
import { CardStatsComponent } from "./components/cards/card-stats/card-stats.component";
import { CardTableComponent } from "./components/cards/card-table/card-table.component";
import { HeaderStatsComponent } from "./components/headers/header-stats/header-stats.component";
import { IndexNavbarComponent } from "./components/navbars/index-navbar/index-navbar.component";
import { IndexDropdownComponent } from "./components/dropdowns/index-dropdown/index-dropdown.component";
import { TableDropdownComponent } from "./components/dropdowns/table-dropdown/table-dropdown.component";
import { PagesDropdownComponent } from "./components/dropdowns/pages-dropdown/pages-dropdown.component";
import { NotificationDropdownComponent } from "./components/dropdowns/notification-dropdown/notification-dropdown.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { UserDropdownComponent } from "./components/dropdowns/user-dropdown/user-dropdown.component";

//pages
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseTableComponent } from './components/course-table/course-table.component';
import { StaffsComponent } from './pages/staffs/staffs.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { StaffTableComponent } from './components/staff-table/staff-table.component';
import { ReviewTableComponent } from './components/review-table/review-table.component';
import { UpdatesComponent } from './pages/updates/updates.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { EditStaffComponent } from './components/edit-staff/edit-staff.component';
import { AddStaffComponent } from './components/add-staff/add-staff.component';
import { AddReviewsComponent } from './components/add-reviews/add-reviews.component';
import { EditReviewComponent } from './components/edit-review/edit-review.component';
import { BlogTableComponent } from './components/blog-table/blog-table.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';
import { EditNewsComponent } from './components/edit-news/edit-news.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { NewsTableComponent } from './components/news-table/news-table.component';
import { BrochuretableComponent } from './components/brochuretable/brochuretable.component';
import { BrochureComponent } from './pages/brochure/brochure.component';
import { SubscriptionsComponent } from './pages/subscriptions/subscriptions.component';
import { SubscriptionTableComponent } from './components/subscription-table/subscription-table.component';

@NgModule({
    declarations: [
        AdminNavbarComponent,
        IndexDropdownComponent,
        PagesDropdownComponent,
        TableDropdownComponent,
        NotificationDropdownComponent,
        UserDropdownComponent,
        SidebarComponent,
        CardPageVisitsComponent,
        CardProfileComponent,
        CardSettingsComponent,
        CardSocialTrafficComponent,
        CardStatsComponent,
        CardTableComponent,
        HeaderStatsComponent,
        AuthNavbarComponent,
        AdminNavbarComponent,
        IndexNavbarComponent,
        //pages
        AdminComponent,
        DashboardComponent,
        CoursesComponent,
        CourseTableComponent,
        StaffsComponent,
        ReviewsComponent,
        StaffTableComponent,
        ReviewTableComponent,
        UpdatesComponent,
        BlogsComponent,
        AddCourseComponent,
        EditCourseComponent,
        EditStaffComponent,
        AddStaffComponent,
        AddReviewsComponent,
        EditReviewComponent,
        BlogTableComponent,
        AddBlogComponent,
        EditBlogComponent,
        EditNewsComponent,
        AddNewsComponent,
        NewsTableComponent,
        BrochuretableComponent,
        BrochureComponent,
        SubscriptionsComponent,
        SubscriptionTableComponent,



    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CKEditorModule,
        DragDropModule,
        
        
    
    ]
})
export class AdminModule { }