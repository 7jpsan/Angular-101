import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PublicComponent } from './public.component';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  declarations: [PageNotFoundComponent, PublicComponent]
})
export class PublicModule { }
