import {Component, Input, Output, EventEmitter, Inject, OnDestroy}
    from 'angular2/core';
import {NgIf, FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, Control}
    from 'angular2/common';
import {LoginCredentials} from './login';
import {bindActionCreators} from 'redux';
import {doLogin} from '../../actions/login-actions';


let componentDirectives = [
  FORM_DIRECTIVES, NgIf
];

@Component({
  selector: LoginFormComponent.SELECTOR,
  template: `
    <div class="flex flex-center login">

      <form class="mx-auto sm-col-6"
        [ngFormModel]="loginForm"
        (submit)="actions.doLogin({
          username: username.value,
          password: password.value
        })"
        novalidate>
        <h1 class="mt0 mb3 center">
          <i class="h1 fa fa-bullseye fa-lg blue"></i> ng2Course App
        </h1>

        <div class="bold center p2 mb2 white bg-red rounded"
          *ngIf="errorMessage">
          {{ errorMessage }}
        </div>

        <label>Enter username</label>
        <input
          id="qa-login-form-username"
          class="block col-12 mb1 field"
          type="text"
          ngControl="username"
          name="username"
          #username
          required>
        <label>Password</label>
        <input
          id="qa-login-form-password"
          class="block col-12 mb1 field"
          type="password"
          ngControl="password"
          name="password"
          #password
          required>

        <button class="btn btn-primary block col-12 mt2"
          id="login-button"
          type="submit"
          [disabled]="!loginForm.valid">
          Login
        </button>
      </form>
    </div>
  `,
  directives: componentDirectives
})
export class LoginFormComponent implements OnDestroy {

  static SELECTOR = 'ngc-login-form';

  private unsubscribe: Function;

  @Input() errorMessage: String;
  loginForm : ControlGroup;

  constructor(private formBuilder: FormBuilder,
              @Inject('ngRedux') private ngRedux) {
    let validators = Validators.compose([
      Validators.required, LoginFormComponent.usernameValidator
    ]);
    this.loginForm = formBuilder.group({
      username: ['', validators],
      password: ['', Validators.required]
    });
    this.unsubscribe = ngRedux.connect(
        null,
        this.mapDispatchToThis
    )(this);
  }

  static usernameValidator(control: Control) {
    if (!control.value.match(/^[a-z]+$/)) {
      return {invalidUsername: true}
    }

    return null;
  }

  ngOnDestroy(): any {
    this.unsubscribe();
  }

  mapDispatchToThis(dispatch) {
    return {
      actions: bindActionCreators({doLogin}, dispatch)
    };
  }

}
