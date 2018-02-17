import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../shared/spotify-auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginServ: LoginService, ) { }

  ngOnInit() {
  }

  public login(): void {
    this.loginServ.login();
  }
}
