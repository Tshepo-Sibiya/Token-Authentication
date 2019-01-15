import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  registerUser(userObj: any) {
    return this.http.post('http://localhost:58755/api/Account/Register', userObj);
  }
}
