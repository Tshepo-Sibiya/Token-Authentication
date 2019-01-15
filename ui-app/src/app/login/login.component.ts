import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/account/login/authentication.service';
import { Route, Router } from '@angular/router';
import { FormGroup, ReactiveFormsModule, FormsModule, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  isError = false;
  loginForm: FormGroup;
  loginObj: any;
  constructor( private rout: Router, private fb: FormBuilder, private AuthService: AuthenticationService ) { }

  login() {
    this.loginObj = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,

    };
    this.AuthService.getAuthToken(this.loginObj).subscribe((data) => {
      if (data != null) {
        console.log(data);
        this.AuthService.TokenObj = data;
        this.AuthService.setToken(this.AuthService.TokenObj);
        this.rout.navigate(['/dashboard']);
      }
    }, _error => {
      console.log(_error);
    });
  }
  ngOnInit() {
    this.loginForm =  this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
