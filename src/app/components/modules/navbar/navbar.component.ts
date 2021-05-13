import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from 'src/app/Models/SessionModel';
import { User } from 'src/app/Models/UserModel';
import { DataSharingService } from 'src/app/Services/data-sharing.service';

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
  isUserLoggedIn: boolean;
  

  constructor(private http: HttpClient,
              private route: Router,
              private dataSharingService: DataSharingService
              ) {
                // Subscribe here, this will automatically update 
                // "isUserLoggedIn" whenever a change to the subject is made.
                this.dataSharingService.isUserLoggedIn.subscribe( value => {
                  this.isUserLoggedIn = value;
                });

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

  clickMethod(name: string) {
    if(confirm("Are you sure you want to Sign Out?")) {
      window.location.reload();
      alert("User has successfully logged out");
      console.log("User has logged out of current session");
      this.route.navigate(['']);
    }
  }

}
