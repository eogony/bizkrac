import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {

  constructor(private db: AngularFireDatabase) { }

  create(user) {
    return this.db.list('/users').push(user);
  }
  getAll() {
    return this.db.list('/users').valueChanges();
  }
}
