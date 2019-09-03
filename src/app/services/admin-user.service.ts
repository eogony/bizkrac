import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {
  userRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  create(user) {
    return this.db.list('/users').push(user);
  }
  getAll() {
    return this.db.list('/users').snapshotChanges();
  }

  // get the user from firebase given the id
  get(id: string) {
    this.userRef = this.db.object('users/' + id);
    return this.userRef;
  }

  update(uid, user) {
    return this.db.object('/users/' + uid).update(user);
  }

  delete(uid) {
    return this.db.object('/users/' + uid).remove();
  }
}
