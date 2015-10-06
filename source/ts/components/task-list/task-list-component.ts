import {Inject} from '../../utils/di';

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
    @Inject('$http') private $http: ng.IHttpService
    ) {
      
    this.$http.get('http://ngcourse.herokuapp.com/api/v1/tasks')
      .then(response => {
        this.$log.info(response.data);
        this.tasks = response.data;
      })
      .then(null, 
        error => this.$log.error(status, error));
  }

  public addTask() {
    // this.$log.debug('Current number of tasks:', this.tasks.length);
  }

};
