import {Inject} from '../../utils/di';
import {TasksService} from '../../services/tasks/tasks-service';

export class TaskListComponent {
  private numberOfTasks;
  private static selector = 'ngc-tasks';
  private static templateUrl = 'components/task-list/task-list-component.html';
  private static options = {
    bindToController: {
      username: '='
    }
  };

  private tasks;

  constructor(
    @Inject('$log') private $log,
    @Inject('tasksService') private tasksService: TasksService
    ) {
    this.getTasks();
  }
  
  public getTasks() {
    this.tasksService.getTasks()
      .then(tasks => this.tasks = tasks);
  }
  public addTask() {
    // this.$log.debug('Current number of tasks:', this.tasks.length);
  }

};
