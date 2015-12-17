import {Component, Input, Output, EventEmitter} from 'ng-forward';

@Component({
  selector: LoginFormComponent.SELECTOR,
  template: `
    <div class="flex flex-center login">

      <form class="mx-auto sm-col-6"
        name="ctrl.form"
        novalidate>

        <h1 class="mt0 mb3 center">
          <i class="h1 fa fa-bullseye fa-lg blue"></i> ngCourse App
        </h1>

        <div class="bold center p2 mb2 white bg-red rounded"
          ng-show="ctrl.errorMessage">
          {{ ctrl.errorMessage }}
        </div>

        <label>Enter username</label>
        <input
          id="qa-login-form-username"
          class="block col-12 mb1 field"
          type="text"
          ng-model="ctrl.username"
          name="username"
          ng-pattern="/^[a-z]+$/"
          required>

        <label>Password</label>
        <input
          id="qa-login-form-password"
          class="block col-12 mb1 field"
          type="password"
          ng-model="ctrl.password"
          name="password"
          required>

        <button class="btn btn-primary block col-12 mt2"
          id="login-button"
          type="submit"
          ng-click="ctrl.submit()"
          ng-disabled="ctrl.form.$invalid">
          Login
        </button>
      </form>
    </div>
  `
})
export class LoginFormComponent {

  @Input() errorMessage: String;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  private _username: String;
  private _password: String;


  static SELECTOR = 'ngc-login-form';

  constructor() {}

  get username(): String {
    return this._username;
  }

  set username(value: String) {
    this._username = value;
  }

  get password(): String {
    return this._password;
  }

  set password(value: String) {
    this._password = value;
  }


  submit() {
    this.onSubmit.next({
      data: {
        username: this.username,
        password: this.password
      }
    });
  }
}
