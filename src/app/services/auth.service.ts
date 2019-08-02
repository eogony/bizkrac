import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    /*add variable to store logged in user data*/
    userData: User;

    /*inject the Firebase authentication service and the router via the service's constructor:*/

 constructor(
     public afAuth: AngularFireAuth,
     public router: Router,
     public ngZone: NgZone  // NgZone service to remove outside scope warning
     ) {
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
            this.SetUserData(result.user);
        }).catch((e) => {
            window.alert('Error!' + e.message);
        });
 }

  /*async login(credential) {
    try {
        await this.afAuth.auth.signInWithCredential(credential);
        this.router.navigate(['/']);
    } catch (e) {
        window.alert('Error!' + e.message);
    }
  }*/


  /*add logout method
  async logout() {
      await this.afAuth.auth.signOut();
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
  } */
  async logout() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    });
  }

  /* add isLoggedIn property to check if the user is logged in */
  get isLoggedIn(): boolean {
      const user = JSON.parse(localStorage.getItem('user'));
      return user !== null;
  }
}

