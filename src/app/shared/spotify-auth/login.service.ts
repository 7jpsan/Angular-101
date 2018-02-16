import { Injectable } from '@angular/core';
import { User } from '../';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { AuthorizeService } from './authorize.service';
import { SpotifyAuthResponse } from './interfaces';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

interface SpotifyUser {
  display_name: string;
  email: string;
  id: string;
  birthdate: string;
  product: string;
  images: any[]
}

@Injectable()
export class LoginService {

  private user: User;
  private user$: BehaviorSubject<User>;

  constructor(private cookieSvc: CookieService, private authServ: AuthorizeService, private http: HttpClient, private router: Router) {
    this.user = this.getUserFromCookie();
    this.user$ = new BehaviorSubject<User>(this.user);
  }

  public get isLoggedIn(): boolean {

    return this.user.isLoggedIn;
  }

  public logout() {
    this.user = new User({ isLoggedIn: false, token: '' } as User);
    this.cookieSvc.delete('spotify-user');
    window.location.href = '/';
  }

  private updateUserDetails(): void {

    const header: HttpHeaders = new HttpHeaders().append('Authorization', `Bearer ${this.user.token}`);

    this.http.get('https://api.spotify.com/v1/me', { headers: header }).pipe(
      tap(response => console.log(`tried`, response)),
      catchError(this.handleError('getSelf', []))
    ).subscribe((user: SpotifyUser) => {
      console.log(user);
      this.user.isLoggedIn = true;
      this.user.name = user.display_name || user.id || user.email;
      this.user.birthday = user.birthdate;
      this.user.email = user.email;
      this.user.product = user.product;
      this.user.profilePic = user.images ? user.images[0].url : null;
      this.setUserCookie(this.user);
      this.user$.next(this.user);
    });
  }

  public updateToken(spotifyResponse: SpotifyAuthResponse): boolean {
    if (!!spotifyResponse && !!spotifyResponse.access_token) {
      this.user.token = spotifyResponse.access_token;
      this.user.isLoggedIn = true;
      this.authServ.setAuthToken(this.user.token);
      this.updateUserDetails();
    }
    return spotifyResponse ? true : false;
  }

  public getUser(): Observable<User> {
    return this.user$.asObservable();
  }

  public login(): void {
    if (!this.isLoggedIn) {
      //Navigate away...
      this.authServ.openSpotifyAuthUrl();
    } else {
      this.router.navigate(['home']);
    }
  }

  private hasUserCookie(): boolean {
    return this.cookieSvc.check('spotify-user');
  }

  private setUserCookie(spotifyUser: User) {
    this.cookieSvc.set('spotify-user', JSON.stringify(spotifyUser));
  }

  private getUserFromCookie(): User {
    return new User(JSON.parse(this.cookieSvc.get('spotify-user') || '{}'));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      this.user.isLoggedIn = false;
      this.user = new User({ isLoggedIn: false, token: '' } as User);
      this.cookieSvc.delete('spotify-user');
      return of(result as T);

    };
  }


}
