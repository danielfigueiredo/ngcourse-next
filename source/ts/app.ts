import 'angular';
import './template-cache';
import 'angular-ui-router';

import * as Rx from 'rx.all';

import {makeDirective, makeSelector} from './utils/component-utils';
import {MainComponent} from './components/main/main-component';
import {TaskListComponent} from './components/task-list/task-list-component';
import {TaskAddComponent} from './components/task-add/task-add-component';
import {LoginFormComponent} from './components/login-form/login-form-component';
import {TaskComponent} from './components/task/task-component';
import {TasksService} from './services/tasks/tasks-service';
import {ServerService} from './services/server/server-service';
import {TasksStore} from './stores/tasks/tasks-store';
import {TaskActions} from './actions/tasks/task-actions';
import {RouterConfig} from './services/router/router-service';

angular.module('ngcourse.router', ['ui.router'])
  .config(RouterConfig);
  
angular.module('ngcourse.server', [])
  .constant('API_BASE_URL', 'http://ngcourse.herokuapp.com')
  .service('serverService', ServerService);
  
angular.module('ngcourse.dispatcher', [])
  .service('dispatcher', Rx.Subject);
  
angular.module('ngcourse.tasks', [])
  .service('taskActions', TaskActions)
  .service('tasksStore', TasksStore);
      
angular.module('ngcourse', [
    'ngcourse.templates', 
    'ngcourse.server', 
    'ngcourse.dispatcher',
    'ngcourse.tasks',
    'ngcourse.router'
  ])
  .service('tasksService', TasksService)
  .directive(
    makeSelector(LoginFormComponent),
    makeDirective(LoginFormComponent))
  .directive(
    makeSelector(MainComponent), 
    makeDirective(MainComponent))
  .directive(
    makeSelector(TaskComponent), 
    makeDirective(TaskComponent))
  .directive(
    makeSelector(TaskListComponent), 
    makeDirective(TaskListComponent))
  .directive(
    makeSelector(TaskAddComponent), 
    makeDirective(TaskAddComponent))
  .run($log => $log.info('All ready!'));

angular.element(document).ready(
  () => angular.bootstrap(document, ['ngcourse'])
);
