import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(public auth: AuthService) {  }

  logout() {
    this.auth.logout();
  }

}
