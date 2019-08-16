import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import { User } from 'src/app/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users$: AngularFireList<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.users$  = db.list('/users');
   }

   /*public filterBooks(): void {
    this.users$ = this.db.list('/users', {
        query: {
            orderByChild: 'profile',
            equalTo: 'Risk Management',
        }
    });
  }
  getProfileData(emailID)
{
    var ref = firebase.database().ref('users');
    ref.orderByChild("email").equalTo(emailID).once("value", (items : any) => {
        let sent_request : any = [];

        items.forEach((item) => {

            sent_request = item.val().sent_request;

        });
        console.log(sent_request);
    });
}*/

   addProfileData(data: any) {
    const rootRef = this.db.object('/users/');
    rootRef.update({
      email: data.email,
      avator: data.picture,
      firstname: data.firstname,
      lastname: data.lastname,
      username: data.usename,
      phone: data.phone
    });
    const childRef = this.db.object('/users/address');
    childRef.update({
      city: data.city,
      country: data.county,
      mailing: data.address + '-' + data.postalcode
    });
    const childRef2 = this.db.object('/users/profile');
    childRef2.update({
      summary: data.aboutme,
      industry_Expertise: data.industry
    });
    const childRef3 = this.db.object('/users/profile/expert category');
    childRef3.update({
      risk_management: data.specialization,
      taxation: data.specialization,
      assurance_audit: data.specialization,
      accounting_and_finance: data.specialization
    });
    }

    /*var newPostRef = postListRef.push();
newPostRef.set({
    // ...
});*/


  /*unwrap the observable to display the todo items in your template using the async pipe like this:
   <ul>
  <li *ngFor="let todo of (todos$ | async)" [class.done]="todo.done">
    {{ todo.content }}
  </li>
  </ul>*/

  updateUser(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
      });
    }

}
