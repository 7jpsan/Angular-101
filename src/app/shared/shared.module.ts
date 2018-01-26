import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    AngularFontAwesomeModule,
    CommonModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class SharedModule { }
