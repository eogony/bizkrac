import { Component, OnInit } from '@angular/core';
import {AuthProvider} from 'ngx-auth-firebaseui';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  constructor(router: Router,public afAuth: AngularFireAuth) { }

  ngOnInit() {

  }
 providers = AuthProvider;
 user: User;

message: string;
errorMessage: string;

saveUser($event) {
  this.user = $event;
  this.message = `${this.user.displayName} here we go!`;
      if (this.user) {
          localStorage.setItem('user', JSON.stringify(this.user));
      } else {
          localStorage.setItem('user', null);
      }

}

handleError($event) {
  this.errorMessage = `Oops! ${$event}`;
}
}
