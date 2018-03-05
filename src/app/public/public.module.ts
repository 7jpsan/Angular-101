import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PublicComponent } from './public.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    PublicRoutingModule
  ],
  declarations: [PageNotFoundComponent, PublicComponent, LoginComponent],
  exports: [LoginComponent]
})
export class PublicModule { }
