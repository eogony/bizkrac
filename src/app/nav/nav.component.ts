import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  user: firebase.User;
  constructor(public auth: AuthService, private afAuth: AngularFireAuth) {
    // show login control only if user has not signed in
    afAuth.authState.subscribe(user => this.user = user);
   }

  logout() {
    this.auth.logout();
  }

}
