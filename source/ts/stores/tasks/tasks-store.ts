import {Inject} from '../../utils/di';
import {ServerService} from '../../services/server/server-service';
import {TASK_ACTIONS} from '../../actions/action-constants';

import * as Rx from 'rx.all';

import {List, fromJS} from 'immutable';

export class TasksStore {

  private _tasksSubject: Rx.ReplaySubject<any>;
  private _tasksSubjectError: Rx.ReplaySubject<any>;
  private _tasks;
  private counter = 0;
  
  constructor(
    @Inject('serverService') 
      private server: ServerService,
    @Inject('dispatcher') 
      private dispatcher: Rx.Subject<any>
    ) {
      this._tasks = List();
      this._tasksSubject = new Rx.ReplaySubject(1);
      this._tasksSubjectError = new Rx.ReplaySubject(1);
      this.registerActionHandlers();
  }

  get tasks() {
    return this._tasks.toJS();
  }
  
  get tasksSubject() {
    return this._tasksSubject;
  }

  get tasksSubjectError() {
    return this._tasksSubjectError;
  }
  
  private emitChange() {
    this._tasksSubject.onNext(this.tasks);
  }

  private emitError(error) {
    this._tasksSubjectError.onNext(error);
  }
  
  private registerActionHandlers() {
    this.dispatcher.filter(
      action => action.actionType === TASK_ACTIONS.TASKS_RESPONSE_SUCCESS)
        .subscribe(
          (action) => {
            this._tasks = fromJS(action.tasks);
            this.emitChange();
          });
          
    this.dispatcher.filter(
      action => action.actionType === TASK_ACTIONS.TASKS_RESPONSE_ERROR)
        .subscribe(
          (action) => error => this.emitError(action.error));
          
     // this.dispatcher.filter(
      // (action) => action.actionType === TASK_ACTIONS.ADD_TASK)
      //   .subscribe(
      //     (action) => this.addTask(action.newTask));
  }
  
  // private addTask(newTask) {
  //   Rx.Observable.fromPromise(
  //     this.server.post('/api/v1/tasks', newTask))
  //       .subscribe(
  //         //() => this.getTasks(),
  //         error => this.emitError(error));
  // }
}
