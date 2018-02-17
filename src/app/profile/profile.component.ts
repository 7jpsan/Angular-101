import { Component, OnInit } from '@angular/core';

import { User } from '../shared/user';
import { LoginService } from '../shared/spotify-auth';

import 'rxjs/add/operator/take';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user: User = {} as User;

  constructor(private loginSvc: LoginService) { }

  public ngOnInit() {
    this.loginSvc.getUserStream().take(1).subscribe((u: User) => {
      this.user = u
    });
  }

}
