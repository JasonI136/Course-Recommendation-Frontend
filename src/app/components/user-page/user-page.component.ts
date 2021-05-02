import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISession } from 'src/app/Models/ISession';
import { Session } from 'src/app/Models/SessionModel';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  session: String;

  constructor(private http: HttpClient,
              private route: Router) { }

  ngOnInit(): void {
    this.session = Session.id;

    const body = new HttpParams()

    this.http.post<ISession>('https://og3xyy24hh.execute-api.ap-southeast-2.amazonaws.com/dev/student/' + this.session, body.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }).subscribe(
      data => {
      console.log(data);
      },
    )
  }

  


  // If the Session ID is filled out you can do another call for all the student details

}
