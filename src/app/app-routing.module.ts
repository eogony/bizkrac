import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './admin/users/users.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewComponent } from './admin/users/new/new.component';
import { JobsComponent } from './jobs/jobs.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetPasswordComponent } from './change-password/reset-password/reset-password.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ExpertCategoryComponent } from './admin/expert-category/expert-category.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'change-password/reset-password', component: ResetPasswordComponent },

  { path: 'admin/expert-category', component: ExpertCategoryComponent, canActivate: [AuthGuardService] },
  { path: 'admin/users/new', component: NewComponent, canActivate: [AuthGuardService] },
  { path: 'admin/users/:id', component: NewComponent, canActivate: [AuthGuardService] },
  { path: 'admin/users', component: UsersComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
