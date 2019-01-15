import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tokenmodel } from '../../../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  data: any;
  tokenApi = 'http://localhost:58755/token';
  TokenObj: any;
  constructor(private http: HttpClient) { }

  logout() {
    localStorage.clear();
  }

  setToken(token: any) {
    // localStorage.setItem(this.TokenObj, token);
    localStorage.setItem('user', JSON.stringify(
      {
        access_token: token.access_token,
        username: token.userName,
        expires_in: token.expires_in
      }
    ));
  }

  retrieveToken() {
    const storedToken: any = localStorage.getItem('user');
    if (!storedToken) {
      // throw 'no token found';
    }
    return storedToken;
  }

  getAuthToken(userObj: any) {
    this.data = userObj;
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/x-www-form-urlencoded');
    const data = 'grant_type=password&username=' + userObj.username + '&password=' + userObj.password;
    return this.http.post(this.tokenApi, data, { headers: header });
  }

  getProducts() {
    this.http.get('');
  }
}
