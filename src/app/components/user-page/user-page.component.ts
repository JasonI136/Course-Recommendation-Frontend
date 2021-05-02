import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
              private route: Router) { }

  ngOnInit(): void {
    this.session = Session.id;
    const body = new HttpParams()
    let getStudentDetailsURL = "https://og3xyy24hh.execute-api.ap-southeast-2.amazonaws.com/dev/student/" + this.session;
    this.http.get<User>(getStudentDetailsURL, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }).subscribe(
      data => {
      console.log(data);
      this.studentDetails = data;
      },
    )
  }
  // END OF GETTING STUDENT DETAILS //
}
