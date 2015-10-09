import {TaskListComponent} from './task-list-component';

import 'angular';
import 'angular-mocks';
import 'rx.all';
import 'rx.testing';
import 'rx.virtualtime';

let _$scope;
let _tasksStoreMock;

let _tasksMock = [{
  owner: 'alice',
  description: 'Build the dog shed.',
  done: true
}, {
  owner: 'bob',
  description: 'Get the milk.',
  done: false
}, {
  owner: 'alice',
  description: 'Fix the door handle.',
  done: true
}];

describe('TaskListComponent', () => {

  beforeEach(() => { 
    angular.mock.inject($rootScope => {
      _$scope = $rootScope.$new();
    });

  });

  it('should get data from stores', () => {

    let scheduler = new Rx.TestScheduler();

    let tasksObservable = scheduler.createHotObservable(
      Rx.ReactiveTest.onNext(200, _tasksMock));

    _tasksStoreMock = {
      tasksSubject: tasksObservable
    };

    let taskListComponent = new TaskListComponent(
      _$scope, _tasksStoreMock);

    scheduler.advanceTo(220);
    chai.expect(taskListComponent.tasks).to.equal(_tasksMock);
  });
  
  it('should get error from stores', () => {

    let scheduler = new Rx.TestScheduler();

    let tasksObservable = scheduler.createHotObservable(
      Rx.ReactiveTest.onError(200, 'error'));

    _tasksStoreMock = {
      tasksSubject: tasksObservable
    };

    let taskListComponent = new TaskListComponent(
        _$scope, _tasksStoreMock);

    scheduler.advanceTo(220);
    chai.expect(taskListComponent.errorMessage).to.equal('error');
  });
});
