
import {tap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AuthorizeService } from './authorize.service';

import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { LoginService } from '.';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthorizeService, private loginSvc: LoginService) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({ setHeaders: this.auth.authHeader });
    
    return next.handle(authReq).pipe(tap((
      event: HttpEvent<any>) => {}, 
      (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.loginSvc.logout();
        }
      }
    }));
    
    //return next.handle(authReq);
  }
}