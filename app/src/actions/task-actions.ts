import {TASK_ACTIONS} from './action-constants';
import {TasksService} from '../services';

export class TaskActions {

  static $inject = ['dispatcher', 'tasksService'];

  constructor(
    private dispatcher: Rx.Subject<any>,
    private tasksService: TasksService) { }

  getTasks() {
    this.tasksService.getTasks()
      .then(tasks => this.dispatcher.onNext({
        actionType: TASK_ACTIONS.HTTP_RESPONSE_NEW_TASKS,
        tasks: tasks
      }))
      .then(null, error => this.dispatcher.onNext({
        actionType: TASK_ACTIONS.HTTP_RESPONSE_NEW_TASKS_ERROR,
        error: error
      }));
  }
  
  addTask(newTask) {
    this.tasksService.addTask(newTask)
      .then(response => this.getTasks())
      .then(null, error => this.dispatcher.onNext({
        actionType: TASK_ACTIONS.HTTP_RESPONSE_ADD_TASKS_ERROR,
        error: error
      }));
  }
}
