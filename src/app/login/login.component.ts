import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(public auth: AuthService, private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  private createForm() {
    this.loginForm = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  getError(el) {
    switch (el) {
      case 'user':
        if (this.loginForm.get('username').hasError('required')) {
          return 'Username required';
        }
        break;
        case 'pass':
          if (this.loginForm.get('password').hasError('required')) {
            return 'Password required';
          }
          break;
          default:
            return '';
    }
  }
  // Accessing form control using getters
  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  /*onSubmit() {
    if (this.loginForm.invalid) {
      return;
    } else {
      // alert('success');
      // this.loginForm.reset();
      }
  }*/

}
