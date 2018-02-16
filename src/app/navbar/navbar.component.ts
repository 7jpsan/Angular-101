import { Component, OnInit, Input } from '@angular/core';
import { makeDecorator } from '@angular/core/src/util/decorators';

import { NavItem } from './services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  private navItems: NavItem[];
  
  constructor() { }

  ngOnInit() {
    console.log(this.navItems);
  }
}
