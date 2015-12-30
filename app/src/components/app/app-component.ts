import {Component, Inject, OnDestroy} from 'angular2/core';
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
      *ngIf="!user.isAuthenticated">
    </ngc-login-form>

    <span [hidden]="!user.isAuthenticated">

      <ngc-navbar [user]="user">
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
export class AppComponent implements OnDestroy {

  static SELECTOR = 'ngc-app';

  private unsubscribe: any;

  constructor(
      private _router: Router,
      @Inject('ngRedux') ngRedux) {
    this.unsubscribe = ngRedux.connect(
        this.mapStateToThis,
        null
    )(this);
  }

  ngOnDestroy(): any {
    this.unsubscribe();
  }

  mapStateToThis(state) {
    return {
      user: state.loginReducer
    }
  }
}
