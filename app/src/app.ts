import 'angular-ui-router';
import 'lodash-compat';
import 'koast-angular';
import 'reflect-metadata';

import 'basscss/css/basscss.css';
import 'font-awesome/css/font-awesome.css';
import '../css/styles.css';

import * as angular from 'angular';
import * as Rx from 'rx';

import {UpgradeAdapter} from 'angular2/upgrade';

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
  MainComponent
} from './components';

import {
  TaskActions, 
  UserActions, 
  AuthenticationActions
} from './actions';

let adapter = new UpgradeAdapter();

angular.module('ngcourse.router', ['ui.router'])
  .config(RouterConfig)
  .service('router', RouterService);

angular.module('ngcourse.authentication', [])
  .service('authenticationStore', AuthenticationStore)
  .service('authenticationActions', AuthenticationActions)
  .directive(
  LoginFormComponent.selector,
  LoginFormComponent.directiveFactory);

angular.module('ngcourse.tasks', [])
  .service('tasksStore', TasksStore)
  .service('tasksActions', TaskActions)
  .directive(
    TaskListComponent.selector,
    TaskListComponent.directiveFactory)
  .directive(
    TaskComponent.selector,
    <ng.IDirectiveFactory> adapter.downgradeNg2Component(TaskComponent))
  .directive(
    TaskAddComponent.selector,
    TaskAddComponent.directiveFactory)
  .directive(
    TaskEditComponent.selector,
    <ng.IDirectiveFactory> adapter.downgradeNg2Component(TaskEditComponent));

angular.module('ngcourse.users', [])
  .service('usersStore', UsersStore)
  .service('usersActions', UserActions);

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

adapter.upgradeNg1Provider('router');
adapter.upgradeNg1Provider('$stateParams');
adapter.upgradeNg1Provider('tasksActions');
adapter.upgradeNg1Provider('tasksStore');

adapter.bootstrap(document.body, ['ngcourse']);
