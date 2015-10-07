import {Inject} from '../../utils/di';
import {ServerService} from '../../services/server/server-service';

export class TasksService {
  
  private tasksPromise;
  
  constructor( 
    @Inject('serverService') 
      private serverService: ServerService) { }

  public getTasks() {
    return this.tasksPromise = this.tasksPromise || 
      this.serverService.get('/api/v1/tasks');
  };
}
