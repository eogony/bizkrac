import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {AuthProvider} from 'ngx-auth-firebaseui';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

   constructor(public auth: AuthService) { }
   providers = AuthProvider;


}
