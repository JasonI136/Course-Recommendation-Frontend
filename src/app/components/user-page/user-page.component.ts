import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ISession } from 'src/app/Models/ISession';
import { Session } from 'src/app/Models/SessionModel';
import { User } from 'src/app/Models/UserModel';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  // GETTING STUDENT DETAILS //
  session: String;
  studentDetails: User;
  getStudentDetailsURL: String;


  constructor(private http: HttpClient,
              private route: Router,
              private cookieService: CookieService) {

                this.studentDetails = new User();
                this.studentDetails.fName = "";
                this.studentDetails.sName = "";
               }

  ngOnInit(): void {
    if(Session.id !== undefined){
      this.studentDetails.fName = Session.fName;
      this.studentDetails.sName = Session.sName;
      this.studentDetails.courseName = Session.courseName;
      this.studentDetails.degree_id = Session.degree_id;
      this.studentDetails.student_id = Session.student_id;
      this.studentDetails.sName = Session.sName;
    }
  }
}
