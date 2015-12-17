import 'angular-ui-router';
import 'lodash-compat';
import 'koast-angular';
import 'reflect-metadata';

import 'basscss/css/basscss.css';
import 'font-awesome/css/font-awesome.css';
import '../css/styles.css';

import * as angular from 'angular';
import * as Rx from 'rx';

import {bundle, bootstrap} from 'ng-forward';

import {
  ServerService, 
  RouterService, 
  RouterConfig
} from './services';

import {
  TasksStore, 
  UsersStore, 
  AuthenticationStore
} from './stores';

import {
  LoginFormComponent,
  TaskListComponent,
  TaskComponent,
  TaskAddComponent,
  TaskEditComponent,
  MainComponent,
  RootComponent
} from './components';

import {
  TaskActions, 
  UserActions, 
  AuthenticationActions
} from './actions';

bundle('ngcourse.new.router', [
  RouterService
]);

angular.module('ngcourse.router', ['ui.router', 'ngcourse.new.router'])
  .config(RouterConfig);

bundle('ngcourse.new.authentication', [
  AuthenticationStore, AuthenticationActions
]);

angular.module('ngcourse.authentication', ['ngcourse.new.authentication'])
  .directive(
    LoginFormComponent.selector,
    LoginFormComponent.directiveFactory);

bundle('ngcourse.new.tasks', [
  TaskComponent, TaskEditComponent, TaskActions, TasksStore, TaskListComponent
]);

angular.module('ngcourse.tasks', ['ngcourse.new.tasks'])
  .directive(
    TaskAddComponent.selector,
    TaskAddComponent.directiveFactory);

bundle('ngcourse.users', [
  UserActions, UsersStore
]);

angular.module('ngcourse.server', [])
  .service('server', ServerService);

angular.module('ngcourse.dispatcher', [])
  .service('dispatcher', Rx.Subject);

angular.module('ngcourse', [
  'ngcourse.authentication',
  'ngcourse.tasks',
  'ngcourse.users',
  'ngcourse.server',
  'ngcourse.router',
  'ngcourse.dispatcher',
  'koast'])
  .directive(
    MainComponent.selector,
    MainComponent.directiveFactory)
  .constant('API_BASE_URL', 'http://ngcourse.herokuapp.com')
  .run((koast, API_BASE_URL) => {
    koast.init({
      baseUrl: API_BASE_URL
    });
    koast.setApiUriPrefix('/api/v2/');
    koast.addEndpoint('tasks', ':_id', {
      useEnvelope: true
    });
    koast.addEndpoint('users', ':_id', {
      useEnvelope: true
    });
  });

bootstrap(RootComponent, ['ngcourse']);
