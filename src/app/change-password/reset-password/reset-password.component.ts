import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder, private auth: AuthService) {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose(
        [ Validators.required,
          Validators.email,
          // Validators.pattern('a-zA-z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]+')
          Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]
      )]
    });
  }
  get email() { return this.form.get('email'); }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    } else {
      this.success = true;
      // alert('The form was submitted');
      this.form.reset();
      }
    }
  ngOnInit() {
  }

}

