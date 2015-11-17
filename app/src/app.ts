import 'angular-ui-router';
import 'lodash-compat';
import 'koast-angular';

import 'basscss/css/basscss.css';
import 'font-awesome/css/font-awesome.css';
import '../css/styles.css';

import * as angular from 'angular';
import * as Rx from 'rx';

class MainDirectiveCtrl {
  
  userDisplayName: string;
  
  constructor() {
    this.userDisplayName = 'Mike Tyson';
  }
  
}

angular.module('ngcourse', [])
  .directive('ngcMain', () => {
    return {
      restrict: 'E',
      scope: {},
      template: '<span>Hello, {{ ctrl.userDisplayName }}.</span>',
      controller: MainDirectiveCtrl,
      controllerAs: 'ctrl',
      bindToController: true
    };
  });

angular.element(document).ready(
  () => angular.bootstrap(document, ['ngcourse'])
);
