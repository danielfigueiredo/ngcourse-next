import {TasksService} from '../../services';

export class TaskListComponent {

  private username: string;
  private tasks;
  private arr;
  
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

  static $inject = ['$log', 'tasksService'];

  constructor(
    private $log: ng.ILogService, 
    private tasksService: TasksService) {

    tasksService.getTasks()
      .then(tasks => this.tasks = tasks)
      .then(null, error => $log.error);
  }
}
