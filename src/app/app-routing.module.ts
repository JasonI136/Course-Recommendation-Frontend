import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/Accounts/login/login.component';
import { RegistrationComponent } from './components/Accounts/registration/registration.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CourseAreasComponent } from './components/Course/course-areas/course-areas.component';
import { CourseListComponent } from './components/Course/course-list/course-list.component';
import { CourseRecommendationsComponent } from './components/Course/course-recommendations/course-recommendations.component';
import { IndexComponent } from './components/index/index.component';
import { SubjectEntryComponent } from './components/Subject/subject-entry/subject-entry.component';
import { SubjectListComponent } from './components/Subject/subject-list/subject-list.component';
import { UserInterestComponent } from './components/user-interest/user-interest.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserAuthenticationGuard } from './Guards/user-authentication.guard';

const routes: Routes = [
  {
    path: 'accounts/registration',
    pathMatch: 'full',
    component:RegistrationComponent
  },
  {
    path: 'accounts/login',
    pathMatch: 'full',
    component:LoginComponent
  },
  {
    path: 'subject/subjectEntry',
    pathMatch: 'full',
    component:SubjectEntryComponent
  },
  {
    path: 'subject/subjectList',
    pathMatch: 'full',
    component:SubjectListComponent
  },
  {
    path: 'course/courseAreas',
    pathMatch: 'full',
    component:CourseAreasComponent
  },
  {
    path: 'course/courseList',
    pathMatch: 'full',
    component:CourseListComponent
  },
  {
    path: 'course/courseRecommendations',
    pathMatch: 'full',
    component:CourseRecommendationsComponent,
    canActivate: [UserAuthenticationGuard]
  },
  {
    path: 'contactUs',
    pathMatch: 'full',
    component:ContactUsComponent
  },
  {
    path: 'userInterests',
    pathMatch: 'full',
    component:UserInterestComponent
  },
  {
    path: 'userPage',
    pathMatch: 'full',
    component:UserPageComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: IndexComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
