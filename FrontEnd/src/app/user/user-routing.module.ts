import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from '../admin/components/sidebar/sidebar.component';


//pages
import { CourseModalComponent } from './components/course-modal/course-modal.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { AcademicComponent } from './pages/academic/academic.component';
import { ArchivesComponent } from './pages/archives/archives.component';
import { CareerComponent } from './pages/career/career.component';
import { ChannelsComponent } from './pages/channels/channels.component';
import { BlogComponent } from './pages/blog/blog.component';
import { SingleBlogComponent } from './pages/blog/single-blog/single-blog.component';
import { CorporateFormComponent } from './pages/corporate-form/corporate-form.component';
import { CorporateComponent } from './pages/corporate/corporate.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { FaqComponent } from './pages/faq/faq.component';
import { GovComponent } from './pages/gov/gov.component';
import { HomeComponent } from './pages/home/home.component';
import { ICSTEComponent } from './pages/icste/icste.component';
import { ITComponent } from './pages/it/it.component';
import { KOComponent } from './pages/ko/ko.component';
import { MembershipsComponent } from './pages/memberships/memberships.component';
import { OtherEventsComponent } from './pages/other-events/other-events.component';
import { PartnershipsComponent } from './pages/partnerships/partnerships.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { RetailComponent } from './pages/retail/retail.component';
import { ServicesComponent } from './pages/services/services.component';
import { SingleEmployeeComponent } from './pages/single-employee/single-employee.component';
import { SiteComponent } from './pages/site/site.component';
import { TechathlonComponent } from './pages/techathlon/techathlon.component';
import { TheCompanyComponent } from './pages/the-company/the-company.component';
import { TheOUComponent } from './pages/the-ou/the-ou.component';
import { TheTeamComponent } from './pages/the-team/the-team.component';
import { UserComponent } from './user.component';
import { ShareHoldersComponent } from './components/share-holders/share-holders.component';
import { CFComponent } from './pages/cf/cf.component';
import { CourseListComponent } from './pages/course-list/course-list.component';




const routes: Routes = [

    {
        path: '', component: UserComponent, children: [

            {
                path: 'home', component: HomeComponent
            },
            {
                path: '', redirectTo: 'home', pathMatch: 'full'
            },
            {
                path: 'company', component: TheCompanyComponent
            },
            {
                path: 'team', component: TheTeamComponent
            },

            {
                path: 'ICSTE', component: ICSTEComponent
            },
            {
                path: 'Techathlon', component: TechathlonComponent
            },
            {
                path: 'otherEvents', component: OtherEventsComponent
            },
            {
                path: 'projects', component: ProjectsComponent
            },
            {
                path: 'services', component: ServicesComponent
            },
            {
                path: 'memberships', component: MembershipsComponent
            },
            {
                path: "course", component: CoursesComponent
            },
          
            {
                path: "faq", component: FaqComponent
            },
            {
                path: "employee", component: SingleEmployeeComponent
            },
            {
                path: "archives", component: ArchivesComponent
            },
            {
                path: "channels", component: ChannelsComponent
            },
            {
                path: "career", component: CareerComponent
            },
            {
                path: "partnerships", component: PartnershipsComponent
            },
            {
                path: "site", component: SiteComponent
            },
            {
                path: "OU", component: TheOUComponent
            },
            {
                path: 'OU/AO', component: AcademicComponent
            },
            {
                path: 'OU/RO', component: RetailComponent
            },
            {
                path: 'OU/GO', component: GovComponent
            },
            {
                path: 'OU/KO', component: KOComponent
            },
            {
                path: 'OU/CO', component: CorporateComponent
            },
            {
                path: 'OU/IT', component: ITComponent
            },
            {
                path: 'OU/CF', component: CFComponent
            },
            {
                path: 'corporate-form', component: CorporateFormComponent
            },
            {
                path:'blogpost' , component:BlogComponent
            },
            {
                path:'singleblog' , component:SingleBlogComponent
            },
            {
                path:'shareholders' , component:ShareHoldersComponent
            },
            {
                path:'courses' , component:CourseListComponent
            }
            
        ]
    },




];;

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
