import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationGuard implements CanActivate {
  sessionId: string = '';

  canActivate()
  {
    //const isStudent = false; // Setting this to true will allow access to all routes/pages
    const isStudent = true;

    if(isStudent){
      return true;
    }
    else{
      return false;
    }
  }
  
}
