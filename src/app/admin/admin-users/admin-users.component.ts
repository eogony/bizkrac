import { Component, OnInit } from '@angular/core';
import { AdminUserService } from 'src/app/services/admin-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {

  constructor(private adminUserService: AdminUserService, private router: Router) { }

  save(user) {
    this.adminUserService.create(user);
    this.router.navigate(['/admin']);
  }

  ngOnInit() {
  }

}
