import { Injectable } from "@angular/core";
import { CanActivate, Route, CanLoad, ActivatedRouteSnapshot, ActivatedRoute, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { LoginService } from './spotify-auth/login.service';

@Injectable()
export class LoginGuard implements CanLoad, CanActivateChild{

    constructor(private loginSvc: LoginService){}

    public canLoad(route: Route): boolean {
        return this.loginSvc.isLoggedIn;
    }
    public canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean{
        
        return this.loginSvc.isLoggedIn;
    }
}