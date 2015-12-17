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
  RouterConfig,
  DispatcherService
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

bundle('ngcourse.router', [
  RouterService
]);

angular.module('ngcourse.router.config', ['ui.router'])
  .config(RouterConfig);

bundle('ngcourse.authentication', [
  AuthenticationStore, AuthenticationActions
]);

bundle('ngcourse.tasks', [TaskActions,  TasksStore]);

bundle('ngcourse.users', [UserActions, UsersStore]);

bundle('ngcourse.server', [ServerService]);

bundle('ngcourse.dispatcher', [DispatcherService]);

angular.module('ngcourse', [
  'ngcourse.authentication',
  'ngcourse.tasks',
  'ngcourse.users',
  'ngcourse.server',
  'ngcourse.router',
  'ngcourse.dispatcher',
  'koast'])
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
