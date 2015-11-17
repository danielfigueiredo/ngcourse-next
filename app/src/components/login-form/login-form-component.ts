export class LoginFormComponent {

  static selector = 'ngcLoginForm';

  static directiveFactory: ng.IDirectiveFactory = () => {
    return {
      restrict: 'E',
      scope: {},
      controllerAs: 'ctrl',
      bindToController: {
        fireSubmit: '&onSubmit'
      },
      controller: LoginFormComponent,
      template: require('./login-form-component.html')
    };
  };

  private username;
  private password;
  private fireSubmit: Function;

  constructor() {
    //
  }

  public submit() {
    this.fireSubmit({
      data: this
    });
  }
}
