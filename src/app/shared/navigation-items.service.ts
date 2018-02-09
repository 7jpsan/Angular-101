import { Injectable } from '@angular/core';

//import { LoginService } from '../spotify-auth/login.service';

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
      icon: "home",
      route: "home"
    } as NavItem,
    {
      title: "Albums",
      icon: "music",
      route: "albums"
    } as NavItem,
    {
      title: "Playlists",
      icon: "headphones",
      route: "playlists"
    } as NavItem,
    {
      icon: "user",
      title: "Profile",
      route: "profile",
      children: [
        {
          title: "Logout",
          route: "logout",
          icon: "sign-out"
        } as NavItem
      ]
    } as NavItem
  ];

  // constructor(private loginSvc: LoginService) { }

  public getNavigationItems(): NavItem[] {

    return NavigationItemsService.NAV_ITEMS;
  }

}
