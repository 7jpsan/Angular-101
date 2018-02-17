import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { NavbarComponent } from './navbar.component';
import { NavitemComponent } from './navitem.component';
import { NavigationItemsService } from './services';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MenuHoverDirective } from './directives/menu-hover.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule
  ],
  declarations: [ 
    NavbarComponent, 
    NavitemComponent,
    MenuHoverDirective
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
