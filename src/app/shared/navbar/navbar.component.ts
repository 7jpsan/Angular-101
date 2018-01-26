import { Component, OnInit } from '@angular/core';

interface NavItem{
  title: string,
  icon: string
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navItems = [
    {
      title: "Home"}, 
    {
      title: "Albums"}, 
    { 
      title: "Playlists"
    }, 
    {
      title: "Profile", icon: "user"
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
