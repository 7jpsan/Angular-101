import { Injectable } from '@angular/core';
import { User, SpotifyUser } from '../';
import { Observable ,  BehaviorSubject ,  of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

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
    this.user.setLoggedIn(!!this.user.name);
    this.user$ = new BehaviorSubject<User>(this.user);
  }

  public get isLoggedIn(): boolean {
    return this.user.isLoggedIn;
  }

  public logout() {
    this.user = new SpotifyUser({} as SpotifyUser).toDomainEntity();// new User({ isLoggedIn: false, token: '' } as User);
    this.cookieSvc.delete('spotify-user');
    window.location.href = '/';
  }

  public update(): boolean {

    //const header: HttpHeaders = new HttpHeaders().append('Authorization', `Bearer ${this.user.token}`);
    this.http.get('https://api.spotify.com/v1/me'/*,  { headers: header } */).pipe(
      tap(response => console.log(`tried`, response)), // This allows you to do things without 
      catchError(this.handleError('getSelf', []))
    ).subscribe((user: SpotifyUser) => {
      //this.user = SpotifyUser.toUser(user);  // Static
      user.token = this.authServ.oAuthToken;
      this.user = new SpotifyUser(user).toDomainEntity();  // Static  
      this.user.setLoggedIn(true);
      this.setUserCookie(user);         // Update the cookie
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

  private setUserCookie(spotifyUser: SpotifyUser) {
    this.cookieSvc.set('spotify-user', JSON.stringify(spotifyUser));
  }

  private getUserFromCookie(): User {
    const x = JSON.parse(this.cookieSvc.get('spotify-user') || '{}') as SpotifyUser;
    const user = new SpotifyUser(x).toDomainEntity();
    this.authServ.updateToken(user.token);
    return user;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      this.user = new User({ isLoggedIn: false, token: '' } as User);
      this.user.setLoggedIn(false);
      this.cookieSvc.delete('spotify-user');
      return of(result as T);

    };
  }


}
