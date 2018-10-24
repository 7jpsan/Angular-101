import { Injectable } from '@angular/core';
import { Observable ,  BehaviorSubject } from 'rxjs';


import { NavItem } from './nav-item.i';
import { LoginService } from '../../shared/spotify-auth';


@Injectable()
export class NavigationItemsService {

  private navItem$: BehaviorSubject<NavItem[]>;

  private NAV_ITEMS: NavItem[] = [
    {
      title: "Home",
      icon: "home",
      route: "home",
    } as NavItem,
    {
      title: "Albums",
      icon: "music",
      route: "albums",
      loginRequired: true,
      children: [
        {
          title: "Latest",
          route: "albums/latest"
        },
      {
        title: "Saved",
        route: "albums/user"
      },
    ]
    } as NavItem,
    {
      title: "Playlists",
      icon: "headphones",
      route: "playlists",
      loginRequired: true
    } as NavItem,
    {
      icon: "user",
      title: "Profile",
      route: "profile",
      loginRequired: true,
      children: [
        {
          title: "Logout",
          route: "logout",
          icon: "sign-out",
          action: () => this.loginSvc.logout()
        } as NavItem
      ]
    } as NavItem
  ];

  constructor(private loginSvc: LoginService) {
    this.navItem$ = new BehaviorSubject(this.NAV_ITEMS.filter(x => !x.loginRequired));

    this.loginSvc.getUserStream()
    .subscribe(x => {
      if(!x.isLoggedIn){
        this.navItem$.next(this.NAV_ITEMS.filter(x => !x.loginRequired));
      }else{
        this.navItem$.next(this.NAV_ITEMS);
      }
    });
  }

  public getNavigationItems(): NavItem[] {

    return this.NAV_ITEMS;
  }

  public getNavigationItemsStream(): Observable<NavItem[]>{
    //Everytime the login changes, the menus change as well.
    return this.navItem$.asObservable();
    // return Observable.of(NavigationItemsService.NAV_ITEMS);
  }

}
