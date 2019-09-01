import { Component, OnInit } from '@angular/core';
import { AdminUserService } from 'src/app/services/admin-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  constructor(private adminUserService: AdminUserService, private router: Router) { }

  save(user) {
    this.adminUserService.create(user);
    this.router.navigate(['/admin/users']);
  }

  ngOnInit() {
  }

}
