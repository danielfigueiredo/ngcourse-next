import {TaskActions} from '../../actions';

export class TaskAddComponent {

  static selector = 'ngcTaskAdd';

  static directiveFactory: ng.IDirectiveFactory = () => {
    return {
      restrict: 'E',
      scope: {},
      controllerAs: 'ctrl',
      bindToController: {},
      controller: TaskAddComponent,
      template: require('./task-add-component.html')
    };
  };

  static $inject = ['$log', 'tasksAction'];
  
  constructor(
    private $log: ng.ILogService,
    private tasksAction: TaskActions
   ) {
     //
  }

  save(task) {
    this.tasksAction.addTask(task);
  }
}
