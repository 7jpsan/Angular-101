import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { NavbarComponent } from './navbar.component';
import { NavitemComponent } from './navitem.component';
import { NavigationItemsService } from './services';
import { SharedModule } from '../shared/shared.module';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    AngularFontAwesomeModule
  ],
  declarations: [ 
    NavbarComponent, 
    NavitemComponent
  ],
  exports: [
    NavbarComponent,
    NavitemComponent,
    AngularFontAwesomeModule
  ],
  providers: [
    NavigationItemsService
  ]
})
export class NavbarModule { }
