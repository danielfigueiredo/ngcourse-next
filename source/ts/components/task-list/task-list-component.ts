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
  private _errorMessage: string;

  constructor(
    @Inject('$scope') 
      private $scope,
    @Inject('tasksStore')
      private tasksStore: TasksStore,
    @Inject('taskActions') 
      private taskActions: TaskActions
    ) {
    
    this.taskActions.getTasks();
    
    let tasksSubjectDisposable = this.tasksStore.tasksSubject.subscribe(
      tasks => this._tasks = tasks);
      
     let tasksSubjectDisposableError = 
        this.tasksStore.tasksSubjectError.subscribe(
          error => {
            if (confirm('Do you want to retry getting the tasks?' + error)) {
              this.taskActions.getTasks();
            }
          });  
      
    this.$scope.$on('$destroy', () => {
      tasksSubjectDisposableError.dispose();
      tasksSubjectDisposable.dispose();
    });
  }
  
  emitGetTasksAction() {
    this.taskActions.getTasks();
  }
  
  get tasks() {
    return this._tasks;
  }
  
  get errorMessage() {
    return this._errorMessage;
  }

  public addTask() {
    // this.$log.debug('Current number of tasks:', this.tasks.length);
  }

};
