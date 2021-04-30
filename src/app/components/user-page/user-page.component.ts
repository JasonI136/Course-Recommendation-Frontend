import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/Models/SessionModel';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alert(Session.id);
  }

  // If the Session ID is filled out you can do another call for all the student details

}
