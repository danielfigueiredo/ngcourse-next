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
  TaskComponent,
  TaskAddComponent
} from './components';

import {
  TasksService,
  ServerService
} from './services';

import {
  TasksStore
} from './stores';

import {
  TaskActions
} from './actions';

angular.module('ngcourse.dispatcher', [])
  .service('dispatcher', Rx.Subject);
    
angular.module('ngcourse.server', [])
  .service('serverService', ServerService)
  .constant('API_BASE_URL', 'http://ngcourse.herokuapp.com');
  
angular.module('ngcourse.tasks', [])
  .service('tasksService', TasksService)
  .service('tasksStore', TasksStore)
  .service('tasksAction', TaskActions)
  .directive(
    TaskListComponent.selector, 
    TaskListComponent.directiveFactory)
  .directive(
    TaskComponent.selector, 
    TaskComponent.directiveFactory)
  .directive(
    TaskAddComponent.selector, 
    TaskAddComponent.directiveFactory);
    
angular.module('ngcourse', [
  'ngcourse.dispatcher',
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
