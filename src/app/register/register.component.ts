import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormValidators } from '../common/form.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  messageForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required,
                Validators.minLength(5),
                FormValidators.cannotContainSpace],
      email: ['', Validators.required],
      password: ['', Validators.required],
      re_password: ['', Validators.required]
     });
  }

  get username() {
    return this.messageForm.get('username');
  }
}
