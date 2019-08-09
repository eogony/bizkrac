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

  constructor(private auth: AuthService, private formbuilder: FormBuilder) { }
   /* username: string;
  password: string;

  login(): void {
    if(this.username === 'admin' && this.password === 'admin') {
     this.router.navigate(['user']);
    } else {
      alert('Invalid credentials');
    }
  }
  }*/
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

  onSubmit(post) {
    if (this.loginForm.invalid) {
      return;
    } else {
      alert('Loading...');
      // this.loginForm.reset();
      }
  }
}
