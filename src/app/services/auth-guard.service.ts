import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate() {
    /* get the authenthication status of the current user. If he is logged in return true. Otherwise navigate them to the login page.
    The map operaor transforms the observable from a user object into a boolean*/
    return this.auth.user$.pipe(
      map(user => {
      if (user) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }));
  }
}
