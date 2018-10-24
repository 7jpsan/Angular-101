
import {take} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

import { User } from '../shared/entities';
import { LoginService } from '../shared/spotify-auth';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user: User = {} as User;

  constructor(private loginSvc: LoginService) { }

  public ngOnInit() {
    this.loginSvc.getUserStream().pipe(take(1)).subscribe((u: User) => {
      this.user = u
    });
  }

}
