import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss'],
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser | undefined;
  constructor(private auth: AuthService) {
    this.auth.appUser$.subscribe((appUser) => (this.appUser = appUser));
  }

  ngOnInit(): void {}

  logout() {
    this.auth.logOut();
  }
}
