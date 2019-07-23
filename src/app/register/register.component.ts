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

  constructor(private formBuilder: FormBuilder, private dataservice: DataService) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', [Validators.required,
              Validators.minLength(4),
              FormValidators.cannotContainSpace,
              // UniqueUsername.uniqueUsernameValidator(this.dataservice)
              FormValidators.shouldBeUnique(this.dataservice)]
            ],
      email: ['', Validators.required,
            Validators.pattern('a-zA-z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]+'),
            ],
      password: ['', Validators.required,
              Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$')
            ],
      re_password: ['', Validators.required]
     }, {
       validator: this.passwordsDontMatch
      });
  }
  // define a property that gives us access to the control in the form
  get name() { return this.messageForm.get('name'); }
  get username() { return this.messageForm.get('username'); }
  get email() { return this.messageForm.get('email'); }
  get password() { return this.messageForm.get('password'); }
  get re_password() { return this.messageForm.get('re_password'); }

  passwordsDontMatch(control: AbstractControl) {
    const newPassword = control.get('password');
    const retypePassword = control.get('re_password');

    if (newPassword.value !== retypePassword.value) {
        return { passwordsDontMatch: true};
    }
  }
  signUp() {
    // display confirmation message to the user on form submission
    console.log(this.messageForm.value);
    alert('The form was submitted');
    this.messageForm.reset();
  }
}
