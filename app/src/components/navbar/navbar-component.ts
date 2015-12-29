import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

let componentDirectives = [
  ROUTER_DIRECTIVES
];

@Component({
  selector: NavbarComponent.SELECTOR,
  template: `
    <div class="clearfix white bg-blue">
      <div class="left col-4 aqua">
        <p class="btn py2 m0 truncate">
          <i class="fa fa-bolt px1"></i>
          Hello,
          <span>
            {{user.displayName}}
          </span>!
        </p>
      </div>
      <div class="right">
        <a class="btn py2 m0"
          [routerLink]="['Tasks']">
          Tasks
        </a>
        <a class="btn py2 m0"
          [routerLink]="['Account']">
          Account
        </a>
        <a id="qa-logout-link"
          class="btn py2 m0"
          (click)="logout()">
          Logout
        </a>
      </div>
    </div>
  `,
  directives: componentDirectives
})
export class NavbarComponent {

  static SELECTOR = 'ngc-navbar';

  @Input() user: any;
  @Output() onLogout : EventEmitter<any> = new EventEmitter();

  logout() {
    this.onLogout.emit('doLogout');
  }
}
