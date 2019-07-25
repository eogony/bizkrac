import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { FormValidators } from '../common/form.validators';
// import { UniqueUsernameDirective } from '../register/unique-username.directive';
// import { uniqueUsernameValidator } from '../register/unique-username.directive';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  messageForm: FormGroup;
  submitted = false;
  isChecked = true;
  // success = false;

  constructor(private formBuilder: FormBuilder, private dataservice: DataService) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.compose(
        [Validators.required,
          Validators.minLength(4),
          FormValidators.nospaceValidator,
          FormValidators.shouldBeUnique(this.dataservice)]
      )],
      email: ['', Validators.compose(
        [Validators.required,
          Validators.email,
          Validators.pattern('a-zA-z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]+')]
          )],
      password: ['', Validators.compose(
        [Validators.required,
          Validators.maxLength(8),
          Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$')]
          )],
      re_password: ['', Validators.required],
      agree_term: ['', Validators.requiredTrue]
     }, { validator: FormValidators.passwordsDontMatch }
     );
  }
  // define a property that gives us access to the control in the form
  get name() { return this.messageForm.get('name'); }
  get username() { return this.messageForm.get('username'); }
  get email() { return this.messageForm.get('email'); }
  get password() { return this.messageForm.get('password'); }
  get re_password() { return this.messageForm.get('re_password'); }
  get agree_term() { return this.messageForm.get('agree_term'); }

  signUp() {
    // display confirmation message to the user on form submission
    if (this.messageForm.invalid) {
      return;
    } else {
      // this.success = true;
      alert('The form was submitted');
      this.messageForm.reset();
      }
    }
}
