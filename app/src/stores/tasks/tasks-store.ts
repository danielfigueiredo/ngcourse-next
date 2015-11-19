import {TASK_ACTIONS} from '../../actions/action-constants';
import {TasksService} from '../../services';

export class TasksStore {

  private _tasks;
  public tasksSubject: Rx.ReplaySubject<any>;

  static $inject = [
    '$log',
    'tasksService',
    'dispatcher'
  ];
  
  constructor(
    private $log,
    private tasksService: TasksService,
    private dispatcher: Rx.Subject<any>
  ) {

    this._tasks = [];
    this.tasksSubject = new Rx.ReplaySubject(1);
    
    this.dispatcher.filter(
      action => action.actionType === TASK_ACTIONS.GET_TASKS)
        .subscribe(() => this.getTasks());
  }
  
  getTasks() {
    this.tasksService.getTasks()
      .then(tasks => {
        this._tasks = tasks;
        this.tasksSubject.onNext(tasks);
      })
      .then(null, error => this.tasksSubject.onError(error));
  }
}
