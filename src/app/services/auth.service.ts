import { Injectable, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { User } from '../common/user';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    /*add variable to store logged in user data*/
    userData: User;
    user$: Observable<firebase.User>;
    loading = false;

    /*inject the Firebase authentication service and the router via the service's constructor:*/
 constructor(
     public afs: AngularFirestore,
     public afAuth: AngularFireAuth,
     public router: Router,
     public route: ActivatedRoute, // get current route and store in local storage to navigate user to the desired page after login
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
    this.loading = true;
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/'; // if there is no returnUrl use root
    localStorage.setItem('returnUrl', returnUrl);

    await this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((result) => {
            this.ngZone.run(() => {
              // this.router.navigate(['/']);
              const retUrl = localStorage.getItem('returnUrl');
              this.router.navigateByUrl(retUrl);
            });
            this.setUserData(result.user);
        }).catch((e) => {
            window.alert('Error!' + e.message);
            this.loading = false;
        });
 }

  /*async signIn(credential) {
    try {
        await this.afAuth.auth.signInWithCredential(credential);
        this.router.navigate(['/']);
    } catch (e) {
        window.alert('Error!' + e.message);
    }
  }*/
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
            this.setUserData(result.user); // create initial user document
            this.router.navigate(['/login']);
        }).catch((error) => {
            window.alert(error.message);
        });
  }
  // calls Firebase authentication method createUserWithEmailAndPassword() using the data provided by the user
  // Firebase performs some validations to these data such as checking if the password is 6 chars, or if email
  // is already associated to another account. If everything is OK, then Firebase will resolve the promise
  // returning the new User information

  /*doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err));
    });
  }*/

  // sets user data to firestore after successful login
  setUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName,
      // photoURL: 'https://goo.gl/Fz9nrQ',
      photoURL: '\assets\image\man-156584_640.png',
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

  FacebookLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      });
    });
 }

 GoogleLogin() {
  return new Promise<any>((resolve, reject) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.afAuth.auth
    .signInWithPopup(provider)
    .then(res => {
      resolve(res);
    });
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

