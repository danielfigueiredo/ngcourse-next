import {Inject} from '../../utils/di';
import {ServerService} from '../../services/server/server-service';
import {TASK_ACTIONS} from '../../actions/action-constants';

import {List, fromJS} from 'immutable';

export class TasksStore {

  private _tasksSubject: Rx.ReplaySubject<any>;
  private _tasks;

  constructor(
    @Inject('$log') 
      private $log: ng.ILogService,
    @Inject('serverService') 
      private server: ServerService,
    @Inject('dispatcher') 
      private dispatcher: Rx.Subject<any>
    ) {
      this._tasks = List();
      this._tasksSubject = new Rx.ReplaySubject(1);
      this.registerActionHandlers();
      this.getTasks();
  }

  get tasks() {
    return this._tasks.toJS();
  }
  
  get tasksSubject() {
    return this._tasksSubject;
  }

  private emitChange() {
    this._tasksSubject.onNext(this.tasks);
  }

  private emitError(error) {
    this._tasksSubject.onError(error);
  }
  
  private registerActionHandlers() {
    this.dispatcher.filter(
      action => action.actionType === TASK_ACTIONS.GET_TASKS)
        .subscribe(
          () => this.getTasks());
          
     this.dispatcher.filter(
      (action) => action.actionType === TASK_ACTIONS.ADD_TASK)
        .subscribe(
          (action) => this.addTask(action.newTask));
  }
  
  private addTask(newTask) {
    Rx.Observable.fromPromise(
      this.server.post('/api/v1/tasks', newTask))
        .subscribe(
          () => this.getTasks(),
          error => this.emitError(error));
  }
  
  private getTasks() {
    Rx.Observable.fromPromise(
      this.server.get('/api/v1/tasks'))
        .subscribe(
          tasks => {
            this._tasks = fromJS(tasks);
            this.emitChange();
          },
          error => this.emitError(error));
  }
}
