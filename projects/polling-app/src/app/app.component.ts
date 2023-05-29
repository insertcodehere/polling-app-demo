import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthenticationService } from './auth/authentication.service';
import { User } from './user/user.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sidenavOpened: boolean = true;

  authenticatedUser: User | null = null;

  get isAuthenticated(): boolean {
    return Boolean(this.authenticatedUser);
  }

  constructor(private _router: Router, private _auth: AuthenticationService) {
    this._auth.authenticated.subscribe(_ => {
      this.authenticatedUser = this._auth.authenticatedUser;
    });
  }

  toggleSidenav(): void {
    this.sidenavOpened = !this.sidenavOpened;
  }

  authRequest(): void {
    const isAuthenticated = this._auth.isAuthenticated();
    if (isAuthenticated) {
      this._auth.logout();
    }

    this._router.navigate(['auth', 'login']);
  }

}
