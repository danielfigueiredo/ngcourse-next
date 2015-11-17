export class MainComponent {

  private username: string;
  private numberOfTasks: number;
  
  static selector = 'ngcMain';

  static directiveFactory: ng.IDirectiveFactory = () => ({
    restrict: 'E',
    scope: {},
    template: require('./main-component.html'),
    controller: MainComponent,
    controllerAs: 'ctrl',
    bindToController: true
  });

  static $inject = ['$log'];
  
  constructor(private $log: ng.ILogService) {
    this.username = 'alice';
    this.numberOfTasks = 0;
  }

  addTask() {
    this.$log.log('Number of Tasks: ', this.numberOfTasks);
    this.numberOfTasks += 1;
  }
}
