import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from '../services';

@Component({
  selector: 'app-navitem',
  templateUrl: './navitem.component.html',
  styleUrls: ['./navitem.component.css']
})
export class NavitemComponent implements OnInit {

  @Input()
  private navItem: NavItem;

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
