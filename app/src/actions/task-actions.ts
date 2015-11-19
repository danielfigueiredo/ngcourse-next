import {TASK_ACTIONS} from './action-constants';

export class TaskActions {

  static $inject = ['dispatcher'];

  constructor(private dispatcher: Rx.Subject<any>) { }

  getTasks() {
    this.dispatcher.onNext({
      actionType: TASK_ACTIONS.GET_TASKS
    });
  }
}
