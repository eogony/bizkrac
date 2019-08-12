import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getIndustries() {
    return this.db.list('/sectors');
  }

  getExpertCategory() {
    return this.db.list('/categories');
  }
}
