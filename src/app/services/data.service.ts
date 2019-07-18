/* import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';


import { switchMap, map } from 'rxjs/operators';

export class User {
    uid: string;
    username: string;

    constructor(auth) {
        this.uid = auth.uid;
    }
}
@Injectable()
export class DataService {
    currentUser: User;

    constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
        this.afAuth.authState.pipe(
            map(auth => {
                if (auth) {
                this.currentUser = new User(auth);
                return this.db.object(`users/${auth.uid}`);
                    }
            })
        ).subscribe(user => {
            this.currentUser ["username"] = user.username;
        }) ;
    }*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'https://console.firebase.google.com/project/bizkrac/database/bizkrac/data/username';

  constructor(private http: HttpClient) { }

  getUsers() {
      return this.http.get<any[]>(this.url).pipe(
          map(users => {
              const newUsers = [];
              for (const user of users) {
                  const email = user.email;
                  const uName = user.username;
                  newUsers.push({ email, username: uName });
              }
              return newUsers;
          }),
          tap(users => console.log(users))
      );
  }

  getUserByEmail(email: string) {
      return this.http.get<any[]>(`$(this.url)?email=${email}`);
  }

  validateUsername(username) {
    return this.http.get(this.url + 'auth/validate-username/' + username).pipe(map((res) => res));
    }

    getUserByUname(uName: string) {
        return this.http.get<any[]>(this.url, {
            params: new HttpParams().set('username', uName)
        });
    }
}
