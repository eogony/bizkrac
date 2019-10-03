import { Component, OnInit, Injectable } from '@angular/core';
import { User } from 'firebase';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {UserInfo} from 'firebase';
import { UserService } from '../user.service';

export const collections = {
  users: 'users',
};

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user : User;
  
  Taxation = ["Business Income Tax", "Capital Gains Tax", "Corporation Tax", "Employee Tax (PAYE)", "Export Incentives", "Fringe Benefits Tax", "Filling Tax Returns", "Indirect Taxes", "Inheritance Tax", "International Tax Compliance" ];
  accounting = [ "Accounting Management Information Systems", "Accounting Records Maintenance", "Accounts Preparation", "Accountancy / Finance Training", "Bid Support / Defence Services", "Budgeting / Forecasting", "Business Partnerships", "Business Plans", "Business Valuation", "Capital Adequacy"];
  audits = ["Asset Management Review", "Assurance / Audit Training", "Climate Change / Sustainability Audits", "Enviromental Audits", "Enviromental Impact Assessment", "Financial Statements / Statutory Audits", "Fraud Investigations", "Governance Efficiency Assessment", "HR Audit / Compliance", "Independent Examinations / Investigations" ];
  risks =  ["Actuarial Services", "Enterprise Risk Management", "Fraud Risk Management", "Political Risk Management", "Operational Risk Management", "Market Risk Assessment", "Other (specify)" ]

  constructor(public afs: AngularFirestore , public us: UserService ) {
  this.user = JSON.parse(localStorage.getItem('user')) || null;
 }

  ngOnInit() {

}

public getUserDocRefByUID(uid: string): AngularFirestoreDocument<UserInfo> {
  return this.afs.doc(`${collections.users}/${uid}`);
}

public deleteUserData(uid: string): Promise<any> {
  const userRef: AngularFirestoreDocument<UserInfo> = this.getUserDocRefByUID(uid);
  return userRef.delete();
}


public updateUserData(user: UserInfo): Promise<any> {
  // Sets user$ data to firestore on login
  const userRef: AngularFirestoreDocument<UserInfo> = this.getUserDocRefByUID(user.uid);
  const data: UserInfo = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL ,
    phoneNumber: user.phoneNumber,
    providerId: user.providerId
  };
  return userRef.set(data, {merge: true});
}
}
