import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  userRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  getCategories() {
    return this.db.list('/categories');
  }
  create(user) {
    return this.db.list('/users').push(user);
  }
  getAll() {
    return this.db.list('/categories')
    .snapshotChanges().pipe(
      map(category =>
        category.map(cat => {
            const key = cat.key;
            const payload = cat.payload.val();
            return { key, ...payload } as any;
          })),
        );
  }
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
