import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './accountManagement/login/login.component';
import { RegisterationComponent } from './accountManagement/registeration/registeration.component';
import { CourseRecommendationsComponent } from './courseManagement/course-recommendations/course-recommendations.component';
import { CourseListComponent } from './courseManagement/course-list/course-list.component';
import { CourseAreasComponent } from './courseManagement/course-areas/course-areas.component';
import { SubjectManagementComponent } from './subject-management/subject-management.component';
import { SubjectEntryComponent } from './subjectManagement/subject-entry/subject-entry.component';
import { SubjectListComponent } from './subjectManagement/subject-list/subject-list.component';
import { ContactUsComponent } from './subjectManagement/contact-us/contact-us.component';
import { RegistrationComponent } from './components/Accounts/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    RegisterationComponent,
    CourseRecommendationsComponent,
    CourseListComponent,
    CourseAreasComponent,
    SubjectManagementComponent,
    SubjectEntryComponent,
    SubjectListComponent,
    ContactUsComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
