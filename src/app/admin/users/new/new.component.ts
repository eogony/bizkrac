import { Component, OnInit } from '@angular/core';
import { AdminUserService } from 'src/app/services/admin-user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  user = {};
  id: string;

  constructor(
    private adminUserService: AdminUserService,
    private router: Router,
    private route: ActivatedRoute) {
      // read id parameter from route
      this.id = this.route.snapshot.paramMap.get('id');
     }

  ngOnInit() {

    /*const now = Date.now();
    modified: now,
    created: now*/

    // if we have an id, read the user with that id from Db
    // take(1) ensures the observable is complete after getting only one item.

    if (this.id) {
      this.adminUserService.get(this.id).valueChanges()
      .pipe(take(1), ).subscribe(data => { this.user = data; });
    }
  }

  save(user) {
    if (this.id) {
      this.adminUserService.update(this.id, user);
    } else {
      this.adminUserService.create(user);
    }
    this.router.navigate(['/admin/users']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this product?')) {
      return;
    }
    this.adminUserService.delete(this.id);
    this.router.navigate(['/admin/users']);
  }

}
