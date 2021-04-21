import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) {
    
   }

  ngOnInit(): void {
  }

  async submitLogin(val){
    const body = new HttpParams()
    .set('id', val.id)
    .set('password', val.password);


    this.http.post<any>('https://og3xyy24hh.execute-api.ap-southeast-2.amazonaws.com/dev/session', body.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }).subscribe(data => {
      console.log(data);
    })

    
  }
}
