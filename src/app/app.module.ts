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
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './home/nav/nav.component';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './home/footer/footer.component';
import { FindconsultantComponent } from './findconsultant/findconsultant.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { JobsComponent } from './jobs/jobs.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { AccountsComponent } from './users/accounts/accounts.component';
import { CategoryService } from './services/category.service';
import { AuthService } from './services/auth.service';
import { FormValidators } from './common/form.validators';
import { DataService } from './services/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MyMaterialModule } from './material';
import { ProfileComponent } from './users/profile/profile.component';
// import { UniqueUsernameDirective } from './register/unique-username.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AccountsComponent,
    NavComponent,
    FooterComponent,
    AdminComponent,
    FindconsultantComponent,
    AdminUsersComponent,
    JobsComponent,
    NewsComponent,
    AboutComponent,
    ProfileComponent
    // UniqueUsernameDirective
  ],
  imports: [
    BrowserModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebase),
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
