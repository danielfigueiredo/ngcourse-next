import {TaskListComponent} from './task-list-component';
import {TaskActions} from '../../actions';

import 'angular';
import 'angular-mocks';
import 'rx';

let _$scope;
let _tasksStoreMock;

let _tasksMock = [{
  owner: 'alice',
  description: 'Build the dog shed.'
}, {
  owner: 'bob',
  description: 'Get the milk.'
}, {
  owner: 'alice',
  description: 'Fix the door handle.'
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
      tasks: tasksObservable
    };

    let taskListComponent = new TaskListComponent(
      _$scope, _tasksStoreMock, null);

    scheduler.advanceTo(220);
    chai.expect(taskListComponent.tasks).to.equal(_tasksMock);
  });
});