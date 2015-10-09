import {Inject} from '../../utils/di';
import {TaskActions} from '../../actions/tasks/task-actions';

export class TaskAddComponent {

  private static selector = 'ngc-task-add';
  private static templateUrl = 'components/task-add/task-add-component.html';
  private static options = {};

  constructor(
    @Inject('$log') private $log,
    @Inject('taskActions') private taskActions: TaskActions
   ) {
     //
  }

  save(task) {
    this.taskActions.addTask(task);
  }
}
