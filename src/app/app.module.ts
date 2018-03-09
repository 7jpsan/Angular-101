import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PublicModule } from './public/public.module';
import { HomeModule } from './home/home.module';

import { CookieService } from 'ngx-cookie-service';
import { LoginGuard } from './login.guard';
import { ProfileComponent } from './profile/profile.component';
import { NavbarModule } from './navbar/navbar.module';
import { Router } from '@angular/router';
import { AlbumsModule } from './albums/albums.module';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    HomeModule,
    NavbarModule,
    SharedModule,
    PublicModule,
    AlbumsModule,
    AppRoutingModule,
  ],
  providers: [
    LoginGuard, 
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router){
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
