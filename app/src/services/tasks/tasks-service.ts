import {ServerService} from '../../services';

export class TasksService {

  static $inject = ['serverService'];

  private taskPromise: Promise<{}>;

  constructor(private serverService: ServerService) { }

  getTasks() {
    this.taskPromise = this.taskPromise 
      || this.serverService.get('/api/v1/tasks');
    return this.taskPromise;
  }
}
