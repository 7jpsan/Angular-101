import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PublicModule } from './public/public.module';
import { HomeModule } from './home/home.module';

import { CookieService } from 'ngx-cookie-service';
import { LoginGuard } from './login.guard';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    PublicModule,
    HomeModule
  ],
  providers: [LoginGuard, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
