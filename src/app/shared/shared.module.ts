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
    AngularFontAwesomeModule,
    RouterModule,
    CommonModule,
    SpotifyAuthModule.forRoot()
  ],
  declarations: [ NavbarComponent, NavitemComponent],
  exports: [ NavbarComponent, NavitemComponent, SpotifyAuthModule],
  providers: [NavigationItemsService]
})
export class SharedModule { }
