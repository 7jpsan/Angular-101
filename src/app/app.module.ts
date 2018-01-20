import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpotifyAuthModule } from './spotify-auth/spotify-auth.module';
import { SharedModule } from './shared/shared.module';
import { PublicModule } from './public/public.module';
import { HomeModule } from './home/home.module';

import { CookieService } from 'ngx-cookie-service';
import { LoginGuard } from './login.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SharedModule,
    SpotifyAuthModule.forRoot(),
    AppRoutingModule,
    PublicModule,
    HomeModule
  ],
  providers: [LoginGuard, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
