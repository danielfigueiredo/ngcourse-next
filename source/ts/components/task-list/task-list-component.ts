import {Inject} from '../../utils/di';
import {TasksService} from '../../services/tasks/tasks-service';
import {TasksStore} from '../../stores/tasks/tasks-store';
import {TaskActions} from '../../actions/tasks/task-actions';

export class TaskListComponent {
  private numberOfTasks;
  private static selector = 'ngc-tasks';
  private static templateUrl = 'components/task-list/task-list-component.html';
  private static options = {
    bindToController: {
      username: '='
    }
  };

  private _tasks;
  private _errorMessage;

  constructor(
    @Inject('$scope') 
      private $scope,
    @Inject('tasksStore')
      private tasksStore: TasksStore,
    @Inject('taskActions') private taskActions: TaskActions
    ) {
      
    let tasksSubjectDisposable = this.tasksStore.tasksSubject.subscribe(
      tasks => this._tasks = tasks,
      error => this._errorMessage = error);
      
    this.$scope.$on('$destroy', () => tasksSubjectDisposable.dispose());
  }
  
  get tasks() {
    return this._tasks;
  }
  
  public emitGetTasksAction() {
    this.taskActions.getTasks();
  }
  public addTask() {
    // this.$log.debug('Current number of tasks:', this.tasks.length);
  }

};
