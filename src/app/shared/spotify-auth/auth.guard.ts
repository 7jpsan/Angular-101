import { Injectable } from '@angular/core';
import { CanActivate, Route, CanLoad, ActivatedRouteSnapshot, ActivatedRoute, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SpotifyAuthResponse } from './interfaces';
import { LoginService } from './login.service';

import * as _ from 'lodash';
import { AuthorizeService } from './';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad, CanActivateChild {

  constructor(private authService: AuthorizeService, private loginSvc: LoginService){}
  
  // Maybe
  public canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
    return this.canActivateChild(next, state);
  }

  // Always allow the request to come thru
  public canLoad(route: Route): boolean {
    return true;
  }

  // This gets called when the callback is invoked. Token is part of Auth
  public canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean{
    const response = this.extractApiResponse(next.fragment);
    this.authService.setAuthToken(response);
    return this.loginSvc.update();
  }

  private extractApiResponse(fragment: string): SpotifyAuthResponse{
    if(!!fragment){
      return _.fromPairs(fragment.split('&').map((s) => s.split('='))) as SpotifyAuthResponse;
    }
    return null;
  }
}
