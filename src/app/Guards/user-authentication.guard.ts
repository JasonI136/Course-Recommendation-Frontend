import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationGuard implements CanActivate {
  constructor( private cookieService: CookieService, private router: Router) {}
  canActivate()
  {
    const cookieValue = this.cookieService.get('session_id');
    if(cookieValue){
      return true;
    }
    else{
      this.router.navigate(['accounts/login']);
    }
  }
}
