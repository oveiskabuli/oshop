import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private afAuth: AngularFireAuth) {}

  ngOnInit(): void {}

  login() {
    return this.afAuth.signInWithRedirect(
      new firebase.default.auth.GoogleAuthProvider()
    );
  }
}
