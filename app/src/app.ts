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
  LoginFormComponent
} from './components';

angular.module('ngcourse', [])
  .directive(
    MainComponent.selector, 
    MainComponent.directiveFactory)
  .directive(
    TaskListComponent.selector, 
    TaskListComponent.directiveFactory)
  .directive(
    LoginFormComponent.selector, 
    LoginFormComponent.directiveFactory);

angular.element(document).ready(
  () => angular.bootstrap(document, ['ngcourse'])
);
