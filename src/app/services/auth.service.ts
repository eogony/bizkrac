import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    /*add variable to store logged in user data*/
    user: User;

    /*inject the Firebase authentication service and the router via the service's constructor:*/

 constructor(public afAuth: AngularFireAuth, public router: Router) {
     /* in the constructor, we subscribe to the authentication state; if the user is logged in
        we add the user's data to the browser's local storage; otherwise we store a null user*/
     this.afAuth.authState.subscribe(user => {
         if (user) {
             this.user = user;
             localStorage.setItem('user', JSON.stringify(this.user));
         } else {
             localStorage.setItem('user', null);
         }
     });
 }
/*add the login() method that will be used to login users with email and password:*/
 async login(email: string, password: string) {
    try {
        await this.afAuth.auth.signInWithEmailAndPassword(email, password);
        this.router.navigate(['/profile']);
    } catch (e) {
        window.alert('Error!' + e.message);
    }
  }

  // Sign up with email/password


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
