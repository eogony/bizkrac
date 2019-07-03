import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { AdminComponent } from './admin/admin.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DataService } from './data.service';
import { UsernameValidators } from './sign-in-form/username.validators';
import { LoginComponent } from './login/login.component';
import { FindconsultantComponent } from './findconsultant/findconsultant.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { RegisterComponent } from './register/register.component';
import { JobsComponent } from './jobs/jobs.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavComponent,
    AdminComponent,
    SignInFormComponent,
    ChangePasswordComponent,
    LoginComponent,
    FindconsultantComponent,
    AdminUsersComponent,
    RegisterComponent,
    JobsComponent,
    NewsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuth,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    DataService,
    UsernameValidators
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
