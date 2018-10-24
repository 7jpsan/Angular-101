import { Component, OnInit } from '@angular/core';
import { LoginService } from './shared/spotify-auth/login.service';
import { User } from './shared';

import { NavigationItemsService } from "./navbar/services/navigation-items.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'app';

  public user: User = new User({} as User);

  public constructor(private loginServ: LoginService, public navService: NavigationItemsService){
    this.loginServ.getUserStream().subscribe((u) => {
      this.user = u;
    });
  }

  public ngOnInit(){
  }



}
