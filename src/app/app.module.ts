import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/Accounts/login/login.component';
import { RegistrationComponent } from './components/Accounts/registration/registration.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CourseAreasComponent } from './components/Course/course-areas/course-areas.component';
import { CourseListComponent } from './components/Course/course-list/course-list.component';
import { CourseRecommendationsComponent } from './components/Course/course-recommendations/course-recommendations.component';
import { IndexComponent } from './components/index/index.component';
import { SubjectEntryComponent } from './components/Subject/subject-entry/subject-entry.component';
import { SubjectListComponent } from './components/Subject/subject-list/subject-list.component';
import { NavbarComponent } from './components/modules/navbar/navbar.component';
import { FooterComponent } from './components/modules/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './Services/contact.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ContactUsComponent,
    CourseAreasComponent,
    CourseListComponent,
    CourseRecommendationsComponent,
    IndexComponent,
    SubjectEntryComponent,
    SubjectListComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
