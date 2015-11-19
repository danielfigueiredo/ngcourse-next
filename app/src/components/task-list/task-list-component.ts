import {TasksStore} from '../../stores';
import {TaskActions} from '../../actions';

export class TaskListComponent {

  private username: string;
  private error: string;
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

  static $inject = ['$log', 'tasksStore', 'tasksAction'];

  constructor(
    private $log: ng.ILogService, 
    private tasksStore: TasksStore,
    private tasksAction: TaskActions) {

    tasksStore.tasksSubject.subscribe(
      tasks => this.tasks = tasks,
      error => this.error = error
    );
  }
  
  getTasks() {
    this.tasksAction.getTasks();
  }
}
