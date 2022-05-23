import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionValidateGuard implements CanActivate {
  private cookie:string|undefined = this.cookieService.get('token_session'); //NOTE: Consultamos la cookie al navegador

  constructor(private router:Router, private cookieService:CookieService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.CheckCookie();
  }
  
  private CheckCookie():boolean{
    if(!this.cookie){
      this.router.navigate(['/','auth','login']);
      return false
    }

    return true;
  }
}
