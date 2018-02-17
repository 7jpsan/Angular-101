import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SpotifyAuthModule } from './spotify-auth/spotify-auth.module';
import { AuthInterceptor } from './spotify-auth/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    SpotifyAuthModule.forRoot(),
  ],
  exports: [ SpotifyAuthModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor, //Force interception.
      multi: true
    }]
})
export class SharedModule { }
