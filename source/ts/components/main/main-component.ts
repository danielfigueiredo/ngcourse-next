import {Inject} from '../../utils/di';

export class MainComponent {
  private static selector = 'ngc-main';
  private static templateUrl = 'components/main/main-component.html';

  private isAuthenticated;
  private username;

  constructor(
    @Inject('$log')
    private $log,
    @Inject('$http')
    private $http) {

    this.isAuthenticated = false;
  }

  public login(data) {
    this.username = data.username;
    this.isAuthenticated = true;
  }

};
