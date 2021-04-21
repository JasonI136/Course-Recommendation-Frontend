import { Component, OnInit } from '@angular/core';
import axios from "axios";
//import querystring from 'querystring';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submitLogin(val){
    console.warn(val) //checking login details


  }

}
