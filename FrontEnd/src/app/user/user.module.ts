import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { CarouselModule } from 'ngx-owl-carousel-o';


//router
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrModule } from 'ngx-toastr';
import {SearchFilterPipe} from './search-filter.pipe'

//user components
import { UserComponent } from './user.component';

import { HomeComponent } from './pages/home/home.component';
import { SearchCourseComponent } from './components/search-course/search-course.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ButtonJoinComponent } from './components/button-join/button-join.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { SubNavComponent } from './components/sub-nav/sub-nav.component';
import { ShowboxComponent } from './components/showbox/showbox.component';
import { FooterComponent } from './components/footer/footer.component';
import { TheTeamComponent } from './pages/the-team/the-team.component';
import { TheCompanyComponent } from './pages/the-company/the-company.component';
import { ICSTEComponent } from './pages/icste/icste.component';
import { TechathlonComponent } from './pages/techathlon/techathlon.component';
import { OtherEventsComponent } from './pages/other-events/other-events.component';
import { AcademicComponent } from './pages/academic/academic.component';
import { RetailComponent } from './pages/retail/retail.component';
import { GovComponent } from './pages/gov/gov.component';
import { CorporateComponent } from './pages/corporate/corporate.component';
import { ITComponent } from './pages/it/it.component';
import { KOComponent } from './pages/ko/ko.component';
import { EventButtonComponent } from './components/event-button/event-button.component';
import { CourseButtonComponent } from './components/course-button/course-button.component';
import { MembershipsComponent } from './pages/memberships/memberships.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ServicesComponent } from './pages/services/services.component';
import { PopularCoursesComponent } from './components/popular-courses/popular-courses.component';
import { NewsEventsComponent } from './components/news-events/news-events.component';
import { TeamMembersComponent } from './components/team-members/team-members.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { CourseModalComponent } from './components/course-modal/course-modal.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { FaqComponent } from './pages/faq/faq.component';
import { SingleEmployeeComponent } from './pages/single-employee/single-employee.component';
import { ArchivesComponent } from './pages/archives/archives.component';
import { DwnldBtnComponent } from './components/dwnld-btn/dwnld-btn.component';
import { PopupComponent } from './components/popup/popup.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { PartnershipsComponent } from './pages/partnerships/partnerships.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { SiteComponent } from './pages/site/site.component';
import { TheOUComponent } from './pages/the-ou/the-ou.component';
import { CorporateFormComponent } from './pages/corporate-form/corporate-form.component';

import { CFComponent } from './pages/cf/cf.component';
import { ChannelsComponent } from './pages/channels/channels.component';
import { CareerComponent } from './pages/career/career.component';

import { BlogComponent } from './pages/blog/blog.component';
import { SingleBlogComponent } from './pages/blog/single-blog/single-blog.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { ShareHoldersComponent } from './components/share-holders/share-holders.component';
import { CourseListComponent } from './pages/course-list/course-list.component';




@NgModule({
    declarations: [
        UserComponent,
        HomeComponent,
        SearchCourseComponent,
        NavBarComponent,
        ButtonJoinComponent,
        HamburgerComponent,
        SubNavComponent,
        ShowboxComponent,
        FooterComponent,
        TheTeamComponent,
        TheCompanyComponent,
        ICSTEComponent,
        TechathlonComponent,
        OtherEventsComponent,
        AcademicComponent,
        RetailComponent,
        GovComponent,
        CorporateComponent,
        ITComponent,
        KOComponent,
        EventButtonComponent,
        CourseButtonComponent,
        CourseModalComponent,
        MembershipsComponent,
        ProjectsComponent,
        ServicesComponent,
        PopularCoursesComponent,
        NewsEventsComponent,
        TeamMembersComponent,
        ScrollToTopComponent,
        CoursesComponent,
        FaqComponent,
        SingleEmployeeComponent,
        ArchivesComponent,
        DwnldBtnComponent,
        PopupComponent,
        ChatbotComponent,
        PartnershipsComponent,
        SideNavbarComponent,
        SiteComponent,
        TheOUComponent,
        CorporateFormComponent,

        CFComponent,
        ChannelsComponent,
        CareerComponent,

        BlogComponent,
        SingleBlogComponent,
        ComingSoonComponent,
        ShareHoldersComponent,
        SearchFilterPipe,
        CourseListComponent





    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        CarouselModule,

        NgxPaginationModule,
        ToastrModule,
        


        
       

    ]
})
export class UserModule { }