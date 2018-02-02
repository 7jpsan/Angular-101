import { Component, OnInit } from '@angular/core';
import { makeDecorator } from '@angular/core/src/util/decorators';

interface NavItem{
  title: string,
  icon: string,
  route: string
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navItems = [
    {
      title: "Home",
      route: "home"
    }, 
    {
      title: "Albums",
      route: "albums"
    }, 
    { 
      title: "Playlists",
      route: "playlists"
    }, 
    {
      title: "Profile", 
      icon: "user",
      route: "profile"
    }
  ];
  
  activeIndex = 0;
  
  constructor() { }

  ngOnInit() {
  }

  onSelect(index: number): void {
    this.activeIndex = index;
  }
}
