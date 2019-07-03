import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    DataService,
    UsernameValidators
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
