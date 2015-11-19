import 'angular-ui-router';
import 'lodash-compat';
import 'koast-angular';

import 'basscss/css/basscss.css';
import 'font-awesome/css/font-awesome.css';
import '../css/styles.css';

import * as angular from 'angular';
import * as Rx from 'rx';

import {
  MainComponent, 
  TaskListComponent,
  LoginFormComponent,
  TaskComponent
} from './components';

import {
  TasksService,
  ServerService
} from './services';

angular.module('ngcourse.server', [])
  .service('serverService', ServerService)
  .constant('API_BASE_URL', 'http://ngcourse.herokuapp.com');
  
angular.module('ngcourse.tasks', [])
  .service('tasksService', TasksService)
  .directive(
    TaskListComponent.selector, 
    TaskListComponent.directiveFactory)
  .directive(
    TaskComponent.selector, 
    TaskComponent.directiveFactory);
    
angular.module('ngcourse', [
  'ngcourse.server',
  'ngcourse.tasks'
  ])
  .directive(
    MainComponent.selector, 
    MainComponent.directiveFactory)
  .directive(
    LoginFormComponent.selector, 
    LoginFormComponent.directiveFactory)
  .run(($log: ng.ILogService) => $log.debug('All Good!'));

angular.element(document).ready(
  () => angular.bootstrap(document, ['ngcourse'])
);
