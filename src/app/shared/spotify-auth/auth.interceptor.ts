import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthorizeService } from './authorize.service';

import { Observable } from 'rxjs/observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthorizeService) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({ setHeaders: this.auth.authHeader });
    return next.handle(authReq);
  }
}