import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss'],
})
export class BsNavbarComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}

  logout() {
    this.auth.logOut();
  }
}
