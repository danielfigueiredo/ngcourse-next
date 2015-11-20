import {TasksStore} from '../../stores';
import {TaskActions} from '../../actions';

export class TaskListComponent {

  username: string;
  error: string;
  tasks;
  
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

  static $inject = ['$scope', 'tasksStore', 'tasksAction'];

  constructor(
    private $scope: ng.IScope,
    private tasksStore: TasksStore,
    private tasksAction: TaskActions) {

    let disposable = tasksStore.tasks.subscribe(
      tasks => this.tasks = tasks,
      error => this.error = error
    );

    this.tasksAction.getTasks();
    
    $scope.$on('$destroy', () => disposable.dispose());
  }
  
  getTasks() {
    this.tasksAction.getTasks();
  }
}
