import {Inject} from '../../utils/di';
import {TASK_ACTIONS} from '../action-constants';
import {TasksService} from '../../services/tasks/tasks-service';

export class TaskActions {

  constructor(
    @Inject('dispatcher') 
      private dispatcher,
    @Inject('tasksService')
      private tasksService: TasksService) {
    this.dispatcher = dispatcher;
  }

  getTasks() {
    this.dispatcher.onNext({
      actionType: TASK_ACTIONS.TASKS_REQUEST
    });
    
    this.tasksService.getTasks()
      .then(
        tasks => this.getTasksResponseSuccess(tasks), 
        error => this.getTasksResponseError(error)
      );
  }
  
  getTasksResponseSuccess(tasks) {
    this.dispatcher.onNext({
      actionType: TASK_ACTIONS.TASKS_RESPONSE_SUCCESS,
      tasks: tasks
    });
  }
  
  getTasksResponseError(error) {
    this.dispatcher.onNext({
      actionType: TASK_ACTIONS.TASKS_RESPONSE_ERROR,
      error: error
    });
  }
  
  addTask(newTask) {
    this.dispatcher.onNext({
      actionType: TASK_ACTIONS.ADD_TASK,
      newTask: newTask
    });
  }
}
