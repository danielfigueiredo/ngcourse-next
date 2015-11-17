export class TaskListComponent {

  private username: string;
  private tasks;

  static selector = 'ngcTasks';

  static directiveFactory: ng.IDirectiveFactory = () => ({
    restrict: 'E',
    scope: {},
    template: require('./task-list-component.html'),
    controller: TaskListComponent,
    controllerAs: 'ctrl',
    bindToController: {
      username: '='
    }
  });

  static $inject = ['$log'];

  constructor(private $log: ng.ILogService) {
    this.username = 'alice';

    this.tasks = [
      {
        owner: 'alice',
        description: 'Build the dog shed.'
      },
      {
        owner: 'bob',
        description: 'Get the milk.'
      },
      {
        owner: 'alice',
        description: 'Fix the door handle.'
      }
    ];
  }
}
