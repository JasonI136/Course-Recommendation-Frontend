import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import querystring from 'querystring';

declare function login(axios, querystring, body): string; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  async submitLogin(val){
    console.warn(val) //checking login details
    const session_id = await login(axios, querystring, val);

    console.log(session_id);
  }
}
