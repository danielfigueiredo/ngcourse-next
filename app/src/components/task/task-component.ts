export class TaskComponent {

  static selector = 'ngcTask';

  static directiveFactory: ng.IDirectiveFactory = () => {
    return {
      restrict: 'E',
      scope: {},
      controllerAs: 'ctrl',
      bindToController: {
        task: '='
      },
      controller: TaskComponent,
      template: require('./task-component.html')
    };
  };

  private task;
  
  constructor(private $log: ng.ILogService) {
    // $log.debug('Task: ', this.task);
  }
};
