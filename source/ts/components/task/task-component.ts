import {Inject} from '../../utils/di';

export class TaskComponent {
  private static selector = 'ngc-task';
  private static templateUrl = 'components/task/task-component.html';
  private static options = {
    bindToController: {
      task: '='
    }
  };

  private task;
  
  constructor( @Inject('$log') private $log) {

  }
};
