import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from './services';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-navitem',
  templateUrl: './navitem.component.html',
  styleUrls: ['./navitem.component.css'],
  animations: [
    trigger('menuState', [
      state('inactive', style({
        transform: 'scale(1)',
        zIndex: 1
      })),
      state('active',   style({
        transform: 'scale(1.05)',
        zIndex: 10
      })),
      // transition('inactive => active', animate('100ms ease-in')),
      // transition('active => inactive', animate('100ms ease-out')),
      transition('inactive <=> active', animate('100ms ease-in'))
    ])
  ]
})
export class NavitemComponent implements OnInit {

  @Input()
  public navItem: NavItem;

  constructor() { }

  ngOnInit() {
  }

  onNavItemClick(event: MouseEvent, args?: any[]): void{
    //event.stopPropagation();
    event.stopImmediatePropagation();
    if(this.navItem.action){
      this.navItem.action.apply(this, args);
    }
  }

}
