import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
// import { User } from 'firebase';
import { Observable } from 'rxjs';
import { User } from '../common/user';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    /*add variable to store logged in user data*/
    userData: User;
    user$: Observable<firebase.User>;

    /*inject the Firebase authentication service and the router via the service's constructor:*/
 constructor(
     public afs: AngularFirestore,
     public afAuth: AngularFireAuth,
     public router: Router,
     public ngZone: NgZone  // NgZone service to remove outside scope warning
     ) {

      // show login control only if the user has not signed in
    this.user$ = afAuth.authState;

     /* in the constructor, we subscribe to the authentication state; if the user is logged in
        we save user data to the browser's local storage; otherwise we store a null user when logged out*/
    this.afAuth.authState.subscribe(user => {
         if (user) {
             this.userData = user;
             localStorage.setItem('user', JSON.stringify(this.userData));
             JSON.parse(localStorage.getItem('user'));
         } else {
             localStorage.setItem('user', null);
             JSON.parse(localStorage.getItem('user'));
         }
     });
 }
/*add the login() method that will be used to login users with email and password:*/
 async login(email: string, password: string) {
    await this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((result) => {
            this.ngZone.run(() => {
                this.router.navigate(['/']);
            });
            this.setUserData(result.user);
        }).catch((e) => {
            window.alert('Error!' + e.message);
        });
 }

  async signIn(credential) {
    try {
        await this.afAuth.auth.signInWithCredential(credential);
        this.router.navigate(['/']);
    } catch (e) {
        window.alert('Error!' + e.message);
    }
  }
  async logout() {
    await this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    });
  }

  /* add isLoggedIn property to check if the user is logged in and email is verified*/
  get isLoggedIn(): boolean {
      const user = JSON.parse(localStorage.getItem('user'));
      return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Create user with Email and password
  createUserWithEmailAndPassword(email, password) {
      return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
            this.sendVerificationMail(); // call the method when new user signs up
            this.setUserData(result.user);
            this.router.navigate(['/login']);
        }).catch((error) => {
            window.alert(error.message);
        });
  }
  /*setting up user data when signing in with username/password, signing up and signing in with social auth
   provider in Firestore database using AngularFirestore + AngularFirestoreDocument service*/
  setUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {
      merge: true
    });
  }
  // Send email verificaiton when new user sign up
  sendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
    .then(() => {
      this.router.navigate(['verify-email-address']);      // not clear ???????
    });
  }
  // Reset Forgot password
  forgotPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email instructions sent, check your inbox.');
    }).catch((error) => {
      window.alert(error);
    });
  }
  changePassword(newPassword) {
    return this.afAuth.auth.currentUser.updatePassword(newPassword)
    .then(() => {
      window.alert('Password Change successfull...redirecting to Login page');
      this.router.navigate(['/login']);
    }).catch((error) => {
      window.alert(error);
    });
  }
  /*reauthenticate() {
    if (yourFormValidation === true) {
      const user = auth().currentUser;

      const credentials = fb.auth.EmailAuthProvider.credential(user.email, this.current_password);
      user.reauthenticateAndRetrieveDataWithCredential(credentials)
        .then(() => {
          user.updatePassword(newPassword)
            .then(() => {
              console.log('your password was successfully changed.');
            })
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error.message));
     }
  }*/
}

