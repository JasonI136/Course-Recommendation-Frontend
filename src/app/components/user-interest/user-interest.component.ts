import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop'


@Component({
  selector: 'app-user-interest',
  templateUrl: './user-interest.component.html',
  styleUrls: ['./user-interest.component.css']
})
export class UserInterestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  todo = [
    'Key Word 1',
    'Key Word 2',
    'Key Word 3',
    'Key Word 4',
    'Key Word 5',
    'Key Word 6'
  ];

  done = [
    'Key Word 7',
    'Key Word 8'
  ];

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
}
