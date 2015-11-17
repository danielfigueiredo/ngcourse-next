import 'angular-ui-router';
import 'lodash-compat';
import 'koast-angular';

import 'basscss/css/basscss.css';
import 'font-awesome/css/font-awesome.css';
import '../css/styles.css';

import * as angular from 'angular';
import * as Rx from 'rx';

import {MainComponent} from './components/main/main-component';

angular.module('ngcourse', [])
  .directive(
    MainComponent.selector, 
    MainComponent.directiveFactory);

angular.element(document).ready(
  () => angular.bootstrap(document, ['ngcourse'])
);
