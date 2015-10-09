import {Inject} from '../../utils/di';

export class RouterConfig {

  constructor(
    @Inject('$stateProvider') 
      private $stateProvider,
    @Inject('$urlRouterProvider') 
      private $urlRouterProvider,
    @Inject('$locationProvider') 
      private $locationProvider
  ) {

    $urlRouterProvider.otherwise('/tasks');
    $locationProvider.html5Mode(false);

    $stateProvider
      .state('tasks', {
        url: '/tasks',
        views: {
          '': {
            template: 'my tasks'
          }
        }
    });
  }
}