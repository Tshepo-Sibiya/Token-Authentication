import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './core/account/login/authentication.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor( private rout: Router, private AuthService: AuthenticationService ) { }
  title = 'ui-app';
  tokenData: any;
  username: string;
  logout() {
    localStorage.clear();
    this.rout.navigateByUrl('/login');
  }
  ngOnInit() {
    this.tokenData = JSON.parse(this.AuthService.retrieveToken());
    if (this.tokenData) {
      this.username = this.tokenData['username'];
    } else {
      this.rout.navigateByUrl('/login');
    }
  }
}


