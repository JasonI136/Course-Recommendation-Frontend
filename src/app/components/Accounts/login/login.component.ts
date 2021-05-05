import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ISession } from 'src/app/Models/ISession';
import { Session } from 'src/app/Models/SessionModel';
import { Cookie } from 'universal-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cookieValue: String;

  constructor(private http: HttpClient,
              private route: Router,
              private cookieService: CookieService) {
    
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
      this.cookieService.set( 'session_id', data.session_id );

      this.cookieValue = this.cookieService.get('session_id');
      
      this.route.navigate(['/userPage']);
      },
      error => {
        alert("Invalid UTS ID or Password");
      }
    )

    
    
  }
}
