import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from 'src/app/Models/SessionModel';
import { User } from 'src/app/Models/UserModel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // GETTING STUDENT DETAILS //
  session: String;
  studentDetails: User;
  getStudentDetailsURL: String;
  

  constructor(private http: HttpClient,
              private route: Router,
              ) {
                this.studentDetails = new User();
                this.studentDetails.fName = "";
                this.studentDetails.sName = "";
               }

  ngOnInit(): void {
  }

  navbarGetStudentData(){
    if(Session.id !== undefined){
      this.studentDetails.fName = Session.fName;
      this.studentDetails.sName = Session.sName;
    }
  }


}
