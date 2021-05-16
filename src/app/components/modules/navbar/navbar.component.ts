import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from 'src/app/Models/SessionModel';
import { User } from 'src/app/Models/UserModel';
import { DataSharingService } from 'src/app/Services/data-sharing.service';
import { Location } from "@angular/common";
import { CookieService } from 'ngx-cookie-service';

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
  currRoute: String; 
  
  //routing options
  isHome : boolean;
  isCourseRecommendations : boolean;
  isUserInterests : boolean; 
  isContactUs : boolean; 
  isLogin : boolean; 
  
  constructor(private http: HttpClient,
              private route: Router,
              private dataSharingService: DataSharingService,
              private cookieService: CookieService,
              location: Location
              ) {
                // Subscribe here, this will automatically update 
                // "isUserLoggedIn" whenever a change to the subject is made.
                this.dataSharingService.isUserLoggedIn.subscribe( value => {
                  this.isUserLoggedIn = value;
                });

                this.studentDetails = new User();
                this.studentDetails.fName = "";
                this.studentDetails.sName = "";

                //subscrpiton to the router 
                route.events.subscribe(val => {
                  if(location.path() != "" ){
                    this.currRoute = location.path();
                  }else{
                    this.currRoute = "home"; 
                  }
                  var splitted = this.currRoute.split("/");
                  this.isHome = (splitted[splitted.length - 1 ] == "home");
                  this.isCourseRecommendations = (splitted[splitted.length - 1 ] == "courseRecommendations");
                  this.isUserInterests = (splitted[splitted.length - 1 ] == "userInterests");
                  this.isContactUs = (splitted[splitted.length - 1 ] == "contactUs");
                  this.isLogin = (splitted[splitted.length - 1 ] == "login"); 

                  
                  
                })
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
      this.cookieService.set( 'session_id', '' );
      window.location.reload();
      alert("User has successfully logged out");
      console.log("User has logged out of current session");
      this.route.navigate(['']);
    }
  }



}
