import { Injectable } from '@angular/core';
import { User, SpotifyUser } from '../';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { AuthorizeService } from './authorize.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LoginService {

  private user: User;
  private user$: BehaviorSubject<User>;

  constructor(
    private cookieSvc: CookieService, 
    private authServ: AuthorizeService, 
    private http: HttpClient, 
    private router: Router)
 {
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

  public update(): boolean {

    //const header: HttpHeaders = new HttpHeaders().append('Authorization', `Bearer ${this.user.token}`);
    this.user.isLoggedIn = true;
    this.http.get('https://api.spotify.com/v1/me'/*,  { headers: header } */).pipe(
      tap(response => console.log(`tried`, response)), // This allows you to do things without 
      catchError(this.handleError('getSelf', []))
    ).subscribe((user: SpotifyUser) => {
      //this.user = SpotifyUser.toUser(user);  // Static
      this.user = new SpotifyUser(user).toDomainEntity();  // Static  
      this.setUserCookie(this.user);         // Update the cookie
      this.user$.next(this.user);            // Publish new user
    });

    return true;
  }

  public getUserStream(): Observable<User> {
    return this.user$.asObservable();
  }

  public login(): void {
    if (!this.isLoggedIn) {
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
