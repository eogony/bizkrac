import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminUserService } from 'src/app/services/admin-user.service';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppUser } from 'src/app/models/app-user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  // user$: Observable<AppUser[]>;
  appUser: AppUser[];
  filteredUser: AppUser[];
  subscription: Subscription;

  constructor(private adminUserService: AdminUserService) { }

  ngOnInit() {
    /*this.user$ = this.adminUserService.getAll().snapshotChanges()
    .pipe(
      map((users: any[]) => users.map(user => ({ id: user.key, ...user.payload.val() })
      )
      ));*/
      this.subscription = this.adminUserService.getAll()
        .subscribe(a => this.filteredUser = this.appUser = a);
      // console.log(this.filteredUser);
  }

  filter(query: string) {
    this.filteredUser = (query) ?
      this.appUser.filter(u => u.firstname.toLowerCase().includes(query.toLowerCase())) : this.appUser;
    // console.log(this.filteredUser);
   }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
