import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthorizeService } from './authorize.service';

import { Observable } from 'rxjs/observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthorizeService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth header from the service.
    const authHeader = this.auth.getAuthHeader();
    // Clone the request to add the new header.
    //const authReq = req.clone({setHeaders: req.headers.set('Authorization', authHeader)});
    const authReq = req.clone({ setHeaders: { Authorization: authHeader}});
    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }
}