import {Inject} from '../../utils/di';

export class LoginFormComponent {

  private static selector = 'ngc-login-form';
  private static templateUrl = 
    'components/login-form/login-form-component.html';
  private static options = {
    bindToController: {
      fireSubmit: '&onSubmit'
    }
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
