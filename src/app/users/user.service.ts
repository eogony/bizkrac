import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { user } from './user';
import { AngularFireAuth } from '@angular/fire/auth/auth';
import { UserInfo, User } from 'firebase';
@Injectable({
  providedIn: 'root'
})

export class UserService {

  private dbPath = '/users';

  usersRef: AngularFirestoreCollection<User> = null;
  $user: User;

  constructor(private db: AngularFirestore , user : user,   public afa: AngularFireAuth) {
    this.usersRef = db.collection(this.dbPath);
  }

  // createUser(user$: user): void {
  //   this.usersRef.add({...user$});
  // }

  updateUser(key: string, value: any): Promise<void> {
    return this.usersRef.doc(key).update(value);
  }

  deleteUser(key: string): Promise<void> {
    return this.usersRef.doc(key).delete();
  }

  getUsersList(): AngularFirestoreCollection<User> {
    return this.usersRef;
  }

  deleteAll() {
    this.usersRef.get().subscribe(
      querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      },
      error => {
        console.log('Error: ', error);
      });
  }
  public updateProfile(name: string, photoURL: string): Promise<any> {
  return this.afa.auth.currentUser.updateProfile({displayName: name, photoURL: photoURL});
}

public deleteAccount(): Promise<any> {
  return this.afa.auth.currentUser.delete();
}

public getPhotoPath(image: string){
  return `assets/${image}`;
}


// Refresh user info. Can be useful for instance to get latest status regarding email verification.
reloadUserInfo() {
  return this.$user.reload();
}

public parseUserInfo(user: User): UserInfo {
  return {
    uid: user.uid,
    displayName: user.displayName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    photoURL: user.photoURL,
    providerId: user.providerData.length > 0 ? user.providerData[0].providerId : null
  };
}

public getUserPhotoUrl(): string {

  const user: firebase.User | null = this.afa.auth.currentUser;

  if (!user) {
    return;
  } else if (user.photoURL) {
    return user.photoURL;
  } else if (user.emailVerified) {
    return this.getPhotoPath("image/default-avatar.png");
}

}
}
