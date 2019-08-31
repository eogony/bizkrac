import { Component, OnInit } from '@angular/core';
import { AdminUserService } from 'src/app/services/admin-user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {

  constructor(private adminUserService: AdminUserService) { }

  save(user) {
    this.adminUserService.create(user);
  }
  
  ngOnInit() {
  }

}
