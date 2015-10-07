import 'angular';
import './template-cache';

import {makeDirective, makeSelector} from './utils/component-utils';
import {MainComponent} from './components/main/main-component';
import {TaskListComponent} from './components/task-list/task-list-component';
import {LoginFormComponent} from './components/login-form/login-form-component';
import {TaskComponent} from './components/task/task-component';
import {TasksService} from './services/tasks/tasks-service';
import {ServerService} from './services/server/server-service';

angular.module('ngcourse.server', [])
  .constant('API_BASE_URL', 'http://ngcourse.herokuapp.com')
  .service('serverService', ServerService);
  
angular.module('ngcourse', ['ngcourse.templates', 'ngcourse.server'])
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
  .run($log => $log.info('All ready!'));

angular.element(document).ready(
  () => angular.bootstrap(document, ['ngcourse'])
);
