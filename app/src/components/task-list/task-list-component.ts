export class TaskListComponent {

  private username: string;
  private arr;
  private numberOfTasks: number;
  
  static selector = 'ngcTasks';

  static directiveFactory: ng.IDirectiveFactory = () => ({
    restrict: 'E',
    scope: {},
    template: require('./task-list-component.html'),
    controller: TaskListComponent,
    controllerAs: 'ctrl',
    bindToController: {
      username: '=',
      arr: '='
    }
  });

  static $inject = ['$log'];
  
  constructor(private $log: ng.ILogService) {
    this.username = 'alice';
    this.numberOfTasks = 0;
    $log.debug('Passed an array: ', this.arr);
  }

  addTask() {
    this.$log.log('Number of Tasks: ', this.numberOfTasks);
    this.numberOfTasks += 1;
  }
}
