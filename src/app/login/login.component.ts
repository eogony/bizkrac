import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as firebase from '@firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private afAuth: AngularFireAuth) { }

 login() {
  this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
 }
}
