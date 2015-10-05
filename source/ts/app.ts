import 'angular';
import './template-cache';

import {makeDirective, makeSelector} from './utils/component-utils';
import {MainComponent} from './components/main/main-component';

angular.module('ngcourse', ['ngcourse.templates'])
  .directive(
    makeSelector(MainComponent),
    makeDirective(MainComponent));

angular.element(document).ready(
  () => angular.bootstrap(document, ['ngcourse'])
);
