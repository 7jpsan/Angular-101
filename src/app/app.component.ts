import { Component, OnInit } from '@angular/core';
import { LoginService } from './shared/spotify-auth/login.service';
import { User } from './shared';

import { NavigationItemsService } from "./shared/services/navigation-items.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'app';

  private user: User = new User({} as User);

  public constructor(private loginServ: LoginService, private navService: NavigationItemsService){
    this.loginServ.getUser().subscribe((u) => {
      this.user = u
    });
  }

  public ngOnInit(){
  }

  public login(): void{
      this.loginServ.login();
  } 

}
