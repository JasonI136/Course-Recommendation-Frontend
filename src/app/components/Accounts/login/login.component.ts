import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ISession } from 'src/app/Models/ISession';
import { Session } from 'src/app/Models/SessionModel';
import { User } from 'src/app/Models/UserModel';
import { DataSharingService } from 'src/app/Services/data-sharing.service';
import { Cookie } from 'universal-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cookieValue: String;
  isUserLoggedIn: boolean;

  constructor(private http: HttpClient,
              private route: Router,
              private cookieService: CookieService,
              private dataSharingService: DataSharingService) {
    
        // Subscribe here, this will automatically update 
        // "isUserLoggedIn" whenever a change to the subject is made.
        this.dataSharingService.isUserLoggedIn.subscribe( value => {
          this.isUserLoggedIn = value;
      });
   }

  ngOnInit(): void {
  }

  async submitLogin(val){
    const body = new HttpParams()
    .set('id', val.id)
    .set('password', val.password);


    this.http.post<ISession>('https://og3xyy24hh.execute-api.ap-southeast-2.amazonaws.com/dev/session', body.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }).subscribe(
      data => {
        console.log(data);
        Session.id = data.session_id;

        let getStudentDetailsURL = "https://og3xyy24hh.execute-api.ap-southeast-2.amazonaws.com/dev/student/" + Session.id;
        this.http.get<User>(getStudentDetailsURL, {
          headers: new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
        }).subscribe(
          data => {
            console.log(data);
            Session.fName = data.fName;
            Session.sName = data.sName;
            Session.age = data.age;
            Session.completedSubjects = data.completedSubjects;
            Session.student_id = data.student_id;
            Session.degree_id = data.degree_id;
            Session.courseName = data.courseName;
            this.dataSharingService.isUserLoggedIn.next(true);
            this.route.navigate(['/userPage']);
          }
        )

        this.cookieService.set('session_id', data.session_id);
        this.cookieValue = this.cookieService.get('session_id');
      },
      error => {
        alert("Invalid UTS ID or Password");
      }
    )

    
    
  }

}
