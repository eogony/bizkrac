import { Component, OnInit } from '@angular/core';
import { AdminUserService } from 'src/app/services/admin-user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user$;

  constructor(private adminUserService: AdminUserService) {
    this.user$ = this.adminUserService.getAll();
   }

  ngOnInit() {
  }

}
