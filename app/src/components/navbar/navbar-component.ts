import {Component, Input, Output, EventEmitter, Inject, OnDestroy}
    from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {doLogout} from '../../actions/user-actions';
import {bindActionCreators} from 'redux';

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
          (click)="actions.doLogout()">
          Logout
        </a>
      </div>
    </div>
  `,
  directives: componentDirectives
})
export class NavbarComponent implements OnDestroy {

  static SELECTOR = 'ngc-navbar';

  @Input() user: any;
  private unsubscribe: any;

  constructor(@Inject('ngRedux') ngRedux) {
    this.unsubscribe = ngRedux.connect(
      null,
      this.mapDispatchToThis
    )(this);
  }

  ngOnDestroy(): any {
    this.unsubscribe();
  }

  mapDispatchToThis(dispatch) {
    return {
      actions: bindActionCreators({doLogout}, dispatch)
    };
  }

}
