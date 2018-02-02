import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from '../index';

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

}
