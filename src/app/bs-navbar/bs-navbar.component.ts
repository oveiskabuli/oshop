import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss'],
})
export class BsNavbarComponent implements OnInit {
  user$: Observable<firebase.default.User | null>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  logout() {
    this.afAuth.signOut();
  }
}
