import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule  } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './footer/footer.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';
import { FindconsultantComponent } from './findconsultant/findconsultant.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { RegisterComponent } from './register/register.component';
import { JobsComponent } from './jobs/jobs.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { CategoryService } from './services/category.service';
import { AuthService } from './services/auth.service';
import { FormValidators } from './common/form.validators';
import { DataService } from './services/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ResetPasswordComponent } from './change-password/reset-password/reset-password.component';
import { MyMaterialModule } from './material';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
// import { UniqueUsernameDirective } from './register/unique-username.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavComponent,
    FooterComponent,
    AdminComponent,
    ChangePasswordComponent,
    LoginComponent,
    FindconsultantComponent,
    AdminUsersComponent,
    RegisterComponent,
    JobsComponent,
    NewsComponent,
    AboutComponent,
    ResetPasswordComponent,
    UpdateProfileComponent
    // UniqueUsernameDirective
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MyMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    DataService,
    FormValidators,
    CategoryService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
