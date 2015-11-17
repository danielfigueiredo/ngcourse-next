export class MainComponent {

  private isAuthenticated: boolean;
  private username: string;
  
  private arr = [1, 2, 4];
  static selector = 'ngcMain';

  static directiveFactory: ng.IDirectiveFactory = () => ({
    restrict: 'E',
    scope: {},
    template: require('./main-component.html'),
    controller: MainComponent,
    controllerAs: 'ctrl',
    bindToController: true
  });

  constructor() { }

  login(data) {
    this.username = data.username;
    this.isAuthenticated = true;
  }
}
