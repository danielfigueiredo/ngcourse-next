import {Inject} from '../../utils/di';

export class MainComponent {

  private static selector = 'ngc-main';
  private static templateUrl = 'components/main/main-component.html';
  private static options = {};

  private username;
  private numberOfTasks;
  
  // static $inject = ['$log'];

  constructor(@Inject('$log') private $log: ng.ILogService) {
    this.username = 'alice';
    this.numberOfTasks = 0;
  }
  
  public addTask() {
    this.$log.debug('Current number of tasks:', this.numberOfTasks);
    this.numberOfTasks += 1;
  }
}

// MainComponent.$inject = ['$log'];
