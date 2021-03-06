import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider} from './app.route-animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slider
  ]
})
export class AppComponent {
  title = 'UTS Course Rec';

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']; 
  }
}
