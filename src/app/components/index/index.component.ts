import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Cookie } from 'universal-cookie';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    
  }

}
