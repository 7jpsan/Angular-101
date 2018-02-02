import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { NavbarComponent } from './navbar/navbar.component';

import { NavigationItemsService } from './navigation-items.service';
import { NavitemComponent } from './navbar/navitem.component';

@NgModule({
  imports: [
    AngularFontAwesomeModule,
    RouterModule,
    CommonModule
  ],
  declarations: [ NavbarComponent, NavitemComponent],
  exports: [ NavbarComponent, NavitemComponent],
  providers: [NavigationItemsService]
})
export class SharedModule { }
