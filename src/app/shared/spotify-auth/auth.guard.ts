import { Injectable } from '@angular/core';
import { CanActivate, Route, CanLoad, ActivatedRouteSnapshot, ActivatedRoute, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SpotifyAuthResponse } from './interfaces';
import { LoginService } from './login.service';

import * as _ from 'lodash';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad, CanActivateChild {

  constructor(private loginSvc: LoginService){}
  
  // Maybe
  public canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
    return this.canActivateChild(next, state);
  }

  // Always allow the request to come thru
  public canLoad(route: Route): boolean {
    
    return true;
  }

  // Maybe
  public canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean{
    const response = this.extractApiResponse(next.fragment);
    console.log(response);
    return this.loginSvc.updateToken(response);
  }

  private extractApiResponse(fragment: string): SpotifyAuthResponse{
    if(!!fragment){
      return _.fromPairs(fragment.split('&').map((s) => s.split('='))) as SpotifyAuthResponse;
    }
    return null;
  }
}
