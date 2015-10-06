import 'angular';
import './template-cache';

import {makeDirective, makeSelector} from './utils/component-utils';
import {MainComponent} from './components/main/main-component';
import {TaskListComponent} from './components/task-list/task-list-component';
import {LoginFormComponent} from './components/login-form/login-form-component';
import {TaskComponent} from './components/task/task-component';

angular.module('ngcourse', ['ngcourse.templates'])
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
    makeDirective(TaskListComponent));

angular.element(document).ready(
  () => angular.bootstrap(document, ['ngcourse'])
);
