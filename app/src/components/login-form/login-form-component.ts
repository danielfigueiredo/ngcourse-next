import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {NgIf, FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, Control}
    from 'angular2/common';
import {LoginCredentials} from './login';

let componentDirectives = [
  FORM_DIRECTIVES, NgIf
];

@Component({
  selector: LoginFormComponent.SELECTOR,
  template: `
    <div class="flex flex-center login">

      <form class="mx-auto sm-col-6"
        [ngFormModel]="loginForm"
        (submit)="doLogin()"
        novalidate>

        <h1 class="mt0 mb3 center">
          <i class="h1 fa fa-bullseye fa-lg blue"></i> ngCourse App
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
          required>
        <label>Password</label>
        <input
          id="qa-login-form-password"
          class="block col-12 mb1 field"
          type="password"
          ngControl="password"
          name="password"
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
export class LoginFormComponent {

  static SELECTOR = 'ngc-login-form';

  @Input() errorMessage: String;
  @Output() onSubmit: EventEmitter<LoginCredentials> = new EventEmitter();
  loginForm : ControlGroup;

  constructor(formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required, LoginFormComponent.usernameValidator])],
      password: ['', Validators.required]
    });
  }

  static usernameValidator(control: Control) {
    if (!control.value.match(/^[a-z]+$/)) {
      return {invalidUsername: true}
    }

    return null;
  }

  doLogin() {
    let loginCredentials: LoginCredentials = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };
    this.onSubmit.emit(loginCredentials);
  }
}
