import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../core/account/register/registration.service';
import { Route, Router } from '@angular/router';
import { FormGroup, ReactiveFormsModule, FormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMessage: string;
  isErrorMessage = false;
  loading = false;
  registrationForm: FormGroup;
  UserObj: any;
  constructor(private regService: RegistrationService, private fb: FormBuilder, private route: Router) { }

  register() {
    if (this.registrationForm.valid) {
      this.loading = true;
      this.UserObj = {
        'Email': this.registrationForm.value.username,
        'Password': this.registrationForm.value.password,
        'ConfirmPassword': this.registrationForm.value.confirmPassword,
      };
      this.regService.registerUser(this.UserObj).subscribe(
        (data) => {
          if (data != null) {
            window.alert('Succeeded...');
            this.route.navigate(['/login']);
          }
          this.loading = false;
        }, err => {
          this.loading = false;
          this.errorMessage = err.error.Message;
          this.isErrorMessage = true;
        });
    } else {
      this.registrationForm.get('username').markAsTouched();
      this.registrationForm.get('password').markAsTouched();
      this.registrationForm.get('confirmPassword').markAsTouched();
    }
  }
  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

}
