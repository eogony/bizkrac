import { Component, OnInit } from '@angular/core';
import {AuthProvider} from 'ngx-auth-firebaseui';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  constructor(router: Router,public afAuth: AngularFireAuth) { }

  user: User;
  user$: Observable<User | null>;
  providers = AuthProvider;
  message: string;
  errorMessage: string;

saveUser($event) {
  this.user = $event;
  this.message = `Welcome once again ${this.user.displayName}!`;
}

handleError($event) {
  this.errorMessage = `Oops! ${$event}`;
}
onSuccess($event){
  this.user$ = this.afAuth.user;
  this.user$.subscribe((user: User) => {
  this.user = user;
  if (this.user) {
      localStorage.setItem('user', JSON.stringify(this.user));
  } else {
      localStorage.setItem('user', null);
  }
});
}


ngOnInit() {

}
}
