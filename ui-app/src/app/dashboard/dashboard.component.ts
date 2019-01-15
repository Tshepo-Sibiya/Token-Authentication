import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/account/login/authentication.service';
import { Tokenmodel } from '../models/tokenModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tokenData: Tokenmodel;
  testObj: Tokenmodel;
  CurrentTokenthis: any;
  access_token: string;
  username: string;
  sampleObj: any;
  constructor(private authService: AuthenticationService) { }

  getToken() {
    this.tokenData = this.authService.TokenObj;
    this.sampleObj =  this.authService.retrieveToken();
    this.testObj = JSON.parse(this.sampleObj);
    console.log(this.testObj['access_token']);
  }
  ngOnInit() {
    this.getToken();
    if (this.CurrentTokenthis) {
        console.log(this.sampleObj);
    }
  }

}
