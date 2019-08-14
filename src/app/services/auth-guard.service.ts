import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    /* get the authenthication status of the current user. If he is logged in return true, otherwise redirect
    user to login page and include queryParams. The map operaor transforms the observable from a user object into a boolean*/
    return this.auth.user$.pipe(
      map(user => {
      if (user) {
        // logged in so return true
        return true;
      } else {
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
      }
    }));
  }

  /*canActivate(route, state: RouterStateSnapshot) {
    // if the user has logged in return true
    if (this.authService.isLoggedIn()) return true;

    state.url === '/' ? this.router.navigate(['/login']) :
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
}*/
}
