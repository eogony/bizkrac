import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
              Validators.minLength(5),
              FormValidators.cannotContainSpace,
              // UniqueUsername.uniqueUsernameValidator(this.dataservice)
              FormValidators.shouldBeUnique(this.dataservice)]
            ],
      email: ['', Validators.required],
      password: ['', Validators.required],
      re_password: ['', Validators.required]
     });
  }
  // define a property that gives us access to the form control object
  get name() {
    return this.messageForm.get('name');
  }
  get username() {
    return this.messageForm.get('username');
  }
}
