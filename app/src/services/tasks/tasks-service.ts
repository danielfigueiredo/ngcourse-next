import {ServerService} from '../../services';

export class TasksService {

  static $inject = ['serverService'];

  private taskPromise: Promise<{}>;

  constructor(private serverService: ServerService) { }

  addTask(newTask) {
    return this.serverService.post('/api/v1/tasks', newTask);
  }
  
  getTasks() {
    // this.taskPromise = this.taskPromise || 
   return this.serverService.get('/api/v1/tasks');
    // return this.taskPromise;
  }
}
