import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import {LinkMenuItem} from 'ngx-auth-firebaseui';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor(public auth: AngularFireAuth) {  }

  links: LinkMenuItem[];
  ngOnInit(): void {
     this.links = [
       {icon: 'home', text: 'Home', callback: this.printLog},
       {icon: 'favorite', text: 'Favorite', callback: this.printLog},
       {icon: 'add', text: 'Add', callback: this.printLog},
     ];
   }

   printLog() {
     console.log(`this is a log $auth.user`);
   }




}
