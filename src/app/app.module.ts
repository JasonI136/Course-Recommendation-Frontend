import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

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
import { UserInterestComponent } from './components/user-interest/user-interest.component';
import {FormsModule} from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {MatStepperModule} from '@angular/material/stepper';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { UserPageComponent } from './components/user-page/user-page.component';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataSharingService } from './Services/data-sharing.service';

const material = [
  MatSliderModule,
];

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
    FooterComponent,
    UserInterestComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    MatStepperModule,
    DragDropModule,
    BrowserAnimationsModule
  ],
  providers: [
    ContactService,
    Title,
    CookieService,
    DataSharingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
