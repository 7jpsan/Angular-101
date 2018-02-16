import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { NavbarComponent } from './navbar/navbar.component';

import { NavigationItemsService } from './services';
import { NavitemComponent } from './navbar/navitem.component';

import { SpotifyAuthModule } from './spotify-auth/spotify-auth.module';
import { AuthInterceptor } from './spotify-auth/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    SpotifyAuthModule.forRoot(),
    AngularFontAwesomeModule
  ],
  declarations: [ NavbarComponent, NavitemComponent],
  exports: [ NavbarComponent, NavitemComponent, SpotifyAuthModule, AngularFontAwesomeModule],
  providers: [
    NavigationItemsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor, //Force interception.
      multi: true
    }]
})
export class SharedModule { }
