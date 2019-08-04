import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { JobsComponent } from './jobs/jobs.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetPasswordComponent } from './change-password/reset-password/reset-password.component';
import { UpdateProfileComponent } from './register/update-profile/update-profile.component';
// import { AuthGuard } from './guard/auth.AuthGuard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'admin', component: AdminComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'admin/admin-users', component: AdminUsersComponent },
  { path: 'change-password/reset-password', component: ResetPasswordComponent },
  { path: 'register/update-profile', component: UpdateProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
