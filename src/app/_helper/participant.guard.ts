import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { RouterAuthenticationService } from '../services/router-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ParticipantGuard implements CanActivate {
  constructor(private routeAuth: RouterAuthenticationService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.routeAuth.isParticipantAuthenticated()){
        return of(true)
      }
      else{
        return of(false)
      }
  }
}