import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<firebase.default.User | null>;
  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }

  login() {
    return this.afAuth.signInWithRedirect(
      new firebase.default.auth.GoogleAuthProvider()
    );
  }

  logOut() {
    this.afAuth.signOut();
  }
}
