//import {TaskListComponent} from '../../components/index';
//import {Injectable, Inject} from 'ng-forward';
//
//@Inject('$urlRouterProvider', '$locationProvider')
//export class RouterConfig {
//
//  constructor(
//    private $urlRouterProvider: angular.ui.IUrlRouterProvider,
//    private $locationProvider: angular.ILocationProvider
//  ) {
//    this.$urlRouterProvider.otherwise('/tasks');
//    this.$locationProvider.html5Mode(false);
//  }
//}
//
//@Injectable
//@Inject('$state')
//export class RouterService {
//
//  constructor(private $state: angular.ui.IStateService) { }
//
//  goToAddTask() {
//    this.$state.go('tasks.add');
//  }
//
//  goToTask(taskId) {
//    this.$state.go('tasks.details', {
//      _id: taskId
//    });
//  }
//
//  goToTaskList() {
//    this.$state.go('tasks', {}, {
//      reload: true
//    });
//  }
//};
