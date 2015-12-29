import {Component} from 'angular2/core';
import {NgIf} from 'angular2/common';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {LoginFormComponent} from '../login-form/login-form-component';
import {TaskOutletComponent} from '../tasks-outlet/task-outlet-component';
import {AccountComponent} from '../account/account-component';
import {NavbarComponent} from '../navbar/navbar-component';
import {LoginCredentials} from '../login-form/login';

let componentDirectives = [
  NgIf, TaskOutletComponent, LoginFormComponent, ROUTER_DIRECTIVES,
  NavbarComponent
];

@Component({
  selector : AppComponent.SELECTOR,
  template : `
    <ngc-login-form
      *ngIf="!user.isAuthenticated"
      (onSubmit)="login($event)">
    </ngc-login-form>

    <span [hidden]="!user.isAuthenticated">

      <ngc-navbar (onLogout)="logout($event)"
        [user]="user">
      </ngc-navbar>

      <div class="px2">
        <main class="container mt4">
          <router-outlet></router-outlet>
        </main>
      </div>

    </span>
  `,
  directives: componentDirectives
})

@RouteConfig([
  { path: '/tasks/...', component: TaskOutletComponent, name: 'Tasks', useAsDefault: true },
  { path: '/account', component: AccountComponent, name: 'Account'}
])
export class AppComponent {

  static SELECTOR = 'ngc-app';

  private _user: any;

  constructor(
      private _router: Router) {
    this._user = this.createUser();
    this._user.isAuthenticated = false;
  }

  private createUser() {
    return {
      isAuthenticated: true,
      displayName: 'Alice Bleeblebrox'
    };
  }

  login(loginCredentials: LoginCredentials) {
    this._user = this.createUser();
  }

  logout($event) {
    this._user.isAuthenticated = false;
  }

  get user() {
    return this._user;
  }

}
