import {Inject} from '../../utils/di';
import {TASK_ACTIONS} from '../action-constants';

export class TaskActions {

  constructor(@Inject('dispatcher') private dispatcher) {
    this.dispatcher = dispatcher;
  }

  getTasks() {
    this.dispatcher.onNext({
      actionType: TASK_ACTIONS.GET_TASKS
    });
  }
  
  addTask(newTask) {
    this.dispatcher.onNext({
      actionType: TASK_ACTIONS.ADD_TASK,
      newTask: newTask
    });
  }
}
