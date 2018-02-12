import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';

import { SpotifyAuthRequestParams } from './interfaces';

@Injectable()
export class AuthorizeService {

  private authParams = { 
    client_id: "d6f49ff0fc1c4d1098c82a61ba8bb7ec",  // WebPortal App Id. Shoud be config
    response_type: "token",
    redirect_uri: "http://localhost:4200/authorized",  // My URL
    state: "somerandomstuff",
    show_dialog: false,
    scope: 'user-read-email user-read-birthdate user-read-private'

  } as SpotifyAuthRequestParams;

  private requestAuthUrl = 'https://accounts.spotify.com/authorize';

  constructor(private http: HttpClient) { }

  public openSpotifyAuthUrl(){
    /* this.http.get(this.buildAuthUrl()).pipe(
      tap(response => console.log(`tried`, response)),
      catchError(this.handleError('getHeroes', []))
    ).subscribe(); */
    window.location.href = this.buildAuthUrl();
  }

  public getAuthHeader(): any{
    return {};
  }

  // TODO Pass current Route as Redirection.

  private buildAuthUrl(): string{

    let params = [];
    for (const [key, value] of Object.entries(this.authParams)) {
      params.push(`${key}=${value}`);
    }

    return `${this.requestAuthUrl}?${params.join('&')}`;
  }
}
