import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recommendation } from 'src/app/Models/RecommendationModel';
import { Session } from 'src/app/Models/SessionModel';
import { User } from 'src/app/Models/UserModel';

@Component({
  selector: 'app-course-recommendations',
  templateUrl: './course-recommendations.component.html',
  styleUrls: ['./course-recommendations.component.css']
})
export class CourseRecommendationsComponent implements OnInit {
  // GETTING STUDENT DETAILS //
  session: String;
  studentDetails: User;
  getStudentDetailsURL: String;

  RecommendationArray = [];

  constructor(private http: HttpClient,
              private route: Router) 
              {
                this.studentDetails = new User();
                this.studentDetails.fName = "";
                this.studentDetails.sName = "";

                this.RecommendationArray = Recommendation.course;
              }

  ngOnInit(): void {
    console.log(this.RecommendationArray);
    //console.log("asdfsdf: " + this.RecommendationArray);

    if(Session.id !== undefined){
      this.studentDetails.fName = Session.fName;
      this.studentDetails.sName = Session.sName;
    }
  }
  // END OF GETTING STUDENT DETAILS //

}
