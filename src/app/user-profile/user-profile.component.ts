import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../common/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
// import {EditDialogComponent} from '../../edit-dialog/edit-dialog.component';
// import {EditType} from '../../edit-dialog/edit-details';
// import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  // profileImage: any = '../../../assets/images/person_edit.png';
  // private user: User;  // retrieve the user model from the service class
 //  @ViewChild(EditDialogComponent) editDialog: EditDialogComponent;

  constructor(
              // private auth: AuthService,
              // private userService: User,
              // private router: Router
            ) { }
    // We implement an onInit interface and override ngOnInit to retrieve the user model, as follows:
  ngOnInit() {
    // this.user = this.userService.getSavedUser().getValue();
  }

}
