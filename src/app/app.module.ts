import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { AdminComponent } from './admin/admin.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsModule,
    ReactiveFormsModule,
    HomeComponent,
    ContactComponent,
    NavComponent,
    AdminComponent,
    SignInFormComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
