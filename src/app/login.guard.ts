import { Injectable } from "@angular/core";
import { CanActivate, Route, CanLoad, ActivatedRouteSnapshot, ActivatedRoute, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { LoginService } from './shared/spotify-auth/login.service';

@Injectable()
export class LoginGuard implements CanLoad, CanActivateChild, CanActivate{

    constructor(private loginSvc: LoginService){}

    public canLoad(route: Route): boolean {
        return this.loginSvc.isLoggedIn;
    }

    public canActivate(): boolean{
        return this.loginSvc.isLoggedIn;
    }

    public canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean{
        
        return this.loginSvc.isLoggedIn;
    }
}