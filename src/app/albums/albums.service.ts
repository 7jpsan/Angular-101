import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, switchMap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';


import { Album } from '../shared';
import { SpotifyAlbum } from '../shared/entities/spotify-album';

@Injectable()
export class AlbumsService {

  private albums$: BehaviorSubject<Album[]>;

  constructor(private http: HttpClient) { }

  public lookupAlbums(): Observable<Album[]>{

    //  //const header: HttpHeaders = new HttpHeaders().append('Authorization', `Bearer ${this.user.token}`);
    //  this.http.get('https://api.spotify.com/v1/albums'/*,  { headers: header } */).pipe(
    //   tap(response => console.log(`tried`, response)), // This allows you to do things without 
    //   catchError(this.handleError('getSelf', [])),
      
    // ).subscribe((spAlbums: SpotifyAlbum[]) => {
    //   const albums = spAlbums.map( a =>new SpotifyAlbum(a).toDomainEntity());
    //   this.albums$.next(albums);            // Publish new user
    // });

    return this.http.get("https://api.spotify.com/v1/browse/new-releases").pipe(switchMap((x:{ albums: {items: SpotifyAlbum[]}}) => {
      // console.log(x.albums.items);
      return of(x.albums.items.map( a =>new SpotifyAlbum(a).toDomainEntity()));
    }))


    // return this.albums$.asObservable();
  }

  public getAlbums(): Observable<Album[]>{
    return this.albums$.asObservable();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
