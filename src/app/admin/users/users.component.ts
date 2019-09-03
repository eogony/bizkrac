import { Component, OnInit } from '@angular/core';
import { AdminUserService } from 'src/app/services/admin-user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user$: Observable<any[]>;

  constructor(private adminUserService: AdminUserService) {
    this.user$ = this.adminUserService.getAll()
    .pipe(map((users: any[]) => users.map(user => ({ id: user.key, ...user.payload.val() }))));
   }

  ngOnInit() {
  }

}
