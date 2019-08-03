import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
form: FormGroup;
// submitted = false;
success = false;

constructor(private fb: FormBuilder, private auth: AuthService) {
  this.form = fb.group({
    /*oldPassword: ['',
      Validators.required,
      PasswordValidators.validOldPassword
    ],*/
    newPassword: ['', Validators.compose(
        [Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$')]
        )],
    confirmPassword: ['']
  }, {
    validator: this.checkPasswords
  });
}

checkPasswords(group: FormGroup) {
  const pass = group.controls.newPassword.value;
  const confirmPass = group.controls.confirmPassword.value;

  if (confirmPass === '') {
    return null;
  }
  return pass === confirmPass ? null : { notSame: true };
}

onSubmit() {
  // this.submitted = true;
  if (this.form.invalid) {
    return;
  } else {
    this.success = true;
  }

}
get oldPassword() { return this.form.get('oldPassword'); }
get newPassword() { return this.form.get('newPassword'); }
get confirmPassword() { return this.form.get('confirmPassword'); }
}
