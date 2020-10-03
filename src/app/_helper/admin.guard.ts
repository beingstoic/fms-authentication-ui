import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';  
import { RouterAuthenticationService } from '../services/router-authentication.service';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {constructor(private routeAuth: RouterAuthenticationService){}
canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean>{

    if(this.routeAuth.isAdminAuthenticated()){
      return of(true)
    }
    else{
      return of(false)
    }
}

}
