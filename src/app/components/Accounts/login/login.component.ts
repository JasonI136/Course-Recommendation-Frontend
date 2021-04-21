import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({})

  constructor() { }

  ngOnInit(): void {
  }

  // loginForm = new FormGroup({
  //   student_id: new FormControl(),
  //   password: new FormControl(),
    
  // })
  

}
