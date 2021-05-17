import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { 
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import * as data from 'src/assets/json/keywords.json';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ISession } from 'src/app/Models/ISession';
import { Session } from 'src/app/Models/SessionModel';
import { Router } from '@angular/router';
import { Recommendation } from 'src/app/Models/RecommendationModel';

@Component({
  selector: 'app-user-interest',
  templateUrl: './user-interest.component.html',
  styleUrls: ['./user-interest.component.css'],
  animations: [
    trigger('userInterestState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('500ms ease-in'))
    ])
  ]
})
export class UserInterestComponent implements OnInit {
  show: boolean = false;
  buttonName: any = 'Begin Questionnaire';
  GroupAssignment: number;
  session: string;
 
  assignment_array: any = { "assignment_types": [] };

  constructor(private http: HttpClient,
              private route: Router) {
    this.session = Session.id;
   }

  ngOnInit(): void {


  }

  clickMethod(name: string) {
    if(confirm("Are you sure you want to refresh the Keyword List")) {
      this.todo = [
        data.keywords[this.getRandomInt()],
        data.keywords[this.getRandomInt()],
        data.keywords[this.getRandomInt()],
        data.keywords[this.getRandomInt()],
        data.keywords[this.getRandomInt()],
        data.keywords[this.getRandomInt()],
        data.keywords[this.getRandomInt()],
        data.keywords[this.getRandomInt()],
      ];
    }
  }

  get stateName() {
    return this.show ? 'show' : 'hide'
  }

  toggle() {
    this.show = !this.show;

   /* if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Begin Questionnare";*/
  }
  
  todo = [
    data.keywords[this.getRandomInt()],
    data.keywords[this.getRandomInt()],
    data.keywords[this.getRandomInt()],
    data.keywords[this.getRandomInt()],
    data.keywords[this.getRandomInt()],
    data.keywords[this.getRandomInt()],
    data.keywords[this.getRandomInt()],
    data.keywords[this.getRandomInt()],
  ];
  done = [
    
  ];

  getRandomInt() {
    return Math.floor(Math.random() * Object.keys( data.keywords ).length);
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  itemsLeft = [ // maybe move this to a new place where we store static data (e.g key words)
    {
      assessment:'Exercises',
    },
    {
      assessment:'Demonstration',
    },
    {
      assessment:'Literature review',
    },
    {
      assessment:'Design/drawing/plan/sketch',
    },
    {
      assessment:'Reflection',
    },
    {
      assessment:'Presentation',
    },
    {
      assessment:'Portfolio',
    },
    {
      assessment:'Exam',
    },
    {
      assessment:'Case study',
    }
  ];
  itemsRight = [ // maybe move this to a new place where we store static data (e.g key words)
    {
      assessment:'Laboratory/practical',
    },
    {
      assessment:'Report',
    },
    {
      assessment:'Project',
    },
    {
      assessment:'Mid-session examination',
    },
    {
      assessment:'Journal',
    },
    {
      assessment:'Essay',
    },
    {
      assessment:'Examination',
    },
    {
      assessment:'Quiz/test',
    }
  ];

  onChangeCategory(event, assessment_types: any){ // Use appropriate model type instead of any
    this.assignment_array.assignment_types.push(assessment_types.assessment);
  }

  submitUserInterests(){
    const body = new HttpParams()
    .set('assignment_types', JSON.stringify(this.assignment_array))
    .set('group_assignments', "1" ) // switch it to a the real variable
    .set('keywords', JSON.stringify(this.done))

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('session_id', this.session);
      // alert(this.session);

    this.http.post<ISession>('https://cr-backend.herokuapp.com/recommendation', body.toString(), { headers: headers})
    .subscribe(data => {
      console.log(data);
    })

    this.route.navigate(['/userPage']);
  }
}


