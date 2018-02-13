import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { NavbarComponent } from './navbar/navbar.component';

import { NavigationItemsService } from './services';
import { NavitemComponent } from './navbar/navitem.component';

import { SpotifyAuthModule } from './spotify-auth/spotify-auth.module';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    SpotifyAuthModule.forRoot(),
    AngularFontAwesomeModule
  ],
  declarations: [ NavbarComponent, NavitemComponent],
  exports: [ NavbarComponent, NavitemComponent, SpotifyAuthModule, AngularFontAwesomeModule],
  providers: [NavigationItemsService]
})
export class SharedModule { }
