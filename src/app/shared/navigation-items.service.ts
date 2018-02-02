import { Injectable } from '@angular/core';

export interface NavItem {
  title: string,
  icon: string,
  route: string
  children?: NavItem[]
}

@Injectable()
export class NavigationItemsService {


  private static NAV_ITEMS: NavItem[] = [
    {
      title: "Home",
      route: "home"
    } as NavItem,
    {
      title: "Albums",
      route: "albums"
    } as NavItem,
    {
      title: "Playlists",
      route: "playlists"
    } as NavItem,
    {
      icon: "user",
      title: "User",
      children: [
        {
          title: "Profile",
          route: "profile"
        } as NavItem,
        {
          title: "Logout",
          route: "logout",
          icon: "sign-out"
        } as NavItem
      ]
    } as NavItem
  ];

  constructor() { }

  public getNavigationItems(): NavItem[] {
    return NavigationItemsService.NAV_ITEMS;
  }

}
