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
    
    this.dispatcher.filter(action => 
      action.actionType === TASK_ACTIONS.HTTP_RESPONSE_NEW_TASKS)
        .subscribe((action) => this.tasks.onNext(fromJS(action.tasks).toJS()));
        
    this.dispatcher.filter(action => 
      action.actionType === TASK_ACTIONS.HTTP_RESPONSE_NEW_TASKS_ERROR)
        .subscribe((action) => this.error.onNext(action.error));
        
    this.dispatcher.filter(action => 
      action.actionType === TASK_ACTIONS.HTTP_RESPONSE_ADD_TASKS_ERROR)
        .subscribe((action) => this.error.onNext(action.error));
  }
  
  getTask(id) {
    return this.tasks.map(
      tasks => tasks.filter(task => task._id === id));
  }
}
