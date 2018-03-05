import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-spotify-auth',
  templateUrl: './spotify-auth.component.html',
  styleUrls: ['./spotify-auth.component.css']
})
export class SpotifyAuthComponent implements OnInit {

  constructor(private router: Router, private loginSvc: LoginService) { }

  ngOnInit() {

    this.loginSvc.getUserStream().subscribe((x) => {
      if (this.loginSvc.isLoggedIn) {
        this.router.navigate(['/home']);
      }
    });
  }

}
