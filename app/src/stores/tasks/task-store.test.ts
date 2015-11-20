import {TasksStore} from '../../stores/tasks/tasks-store';
import {TASK_ACTIONS} from '../../actions/action-constants';

import 'rx';

describe('TasksStore', () => {

  let _scheduler: Rx.TestScheduler;
  let _mockDispatcher;
  let _mockTasksService;
  let _$log;

  let _mockTasks;
  let _mockNewTask;

  beforeEach(() => {

    _mockTasks = [{
      owner: 'alice',
      description: 'Build the dog shed.'
    }, {
      owner: 'bob',
      description: 'Get the milk.'
    }, {
      owner: 'alice',
      description: 'Fix the door handle.'
    }];

    _mockNewTask = {
      owner: 'alice',
      description: 'Kill Bill.'
    };

    _mockTasksService = {
      getTasks: () => Promise.resolve(_mockTasks),
      addTask: (newTask) => Promise.resolve(
        _mockTasks.push(_mockNewTask))
    };

    inject($log => _$log = $log);

    _scheduler = new Rx.TestScheduler();
  });

  it('should add a new task', (done) => {

    _mockDispatcher = _scheduler.createColdObservable(
      Rx.ReactiveTest.onNext(10, {
        actionType: TASK_ACTIONS.ADD_TASK,
        newTask: _mockNewTask
      }));

    let tasksStore = new TasksStore(_$log, _mockTasksService, _mockDispatcher);

    tasksStore.tasks.subscribe(
      tasks => {
        chai.expect(tasks).to.not.be.undefined;
        chai.expect(tasks).to.contain(_mockNewTask);
        done();
      }
    );

    _scheduler.advanceTo(25);
  });
});
