import {TASK_ACTIONS} from '../../actions/action-constants';
import {TasksService} from '../../services';

import {List, fromJS} from 'immutable';

export class TasksStore {

  tasks: Rx.ReplaySubject<any>;
  error: Rx.ReplaySubject<any>;

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

    this.tasks = new Rx.ReplaySubject(1);
    this.error = new Rx.ReplaySubject(1);
    
    this.dispatcher.filter(
      action => action.actionType === TASK_ACTIONS.GET_TASKS)
        .subscribe((action) => this.getTasks());
        
    this.dispatcher.filter(
      action => action.actionType === TASK_ACTIONS.ADD_TASK)
        .subscribe((action) => this.addTask(action.newTask));
  }
  
  addTask(newTask) {
    this.tasksService.addTask(newTask)
      .then(() => this.getTasks())
      .then(null, error => this.error.onNext(error));
  }
  
  getTasks() {
    this.tasksService.getTasks()
      .then(tasks => this.tasks.onNext(fromJS(tasks).toJS()))
      .then(null, error => this.error.onNext(error));
  }
}
