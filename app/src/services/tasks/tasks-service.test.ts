import {TasksService} from './tasks-service';

describe('TasksService', () => {

  let _mockServerService;

  let _mockTasks = [{
    owner: 'alice',
    description: 'Build the dog shed.'
  }, {
    owner: 'bob',
    description: 'Get the milk.'
  }, {
    owner: 'alice',
    description: 'Fix the door handle.'
  }];

  beforeEach(() => { 
    _mockServerService = {
      get: sinon.spy(() => Promise.resolve(_mockTasks))
    };
    
    _mockServerService.get.reset();
  });

  it('should get loaded', () => {
    let tasksService = new TasksService(_mockServerService);
    chai.expect(tasksService.getTasks()).to.not.be.undefined;
  });
  
  it('should get tasks', () => {
    // Notice that we've specified that our function takes a 'done' argument.
    // This tells Mocha this is an asynchronous test. An asynchronous test will
    // not be considered 'successful' until done() is called without any
    // arguments. If we call done() with an argument the test fails, treating
    // that argument as an error.
    let tasksService = new TasksService(_mockServerService);

    return tasksService.getTasks()
      .then(tasks => chai.expect(tasks).to.deep.equal(_mockTasks));
  });
  
  it('should only call server service get once', () => {
    let tasksService = new TasksService(_mockServerService);
    
    return tasksService.getTasks() // Call getTasks the first time.
      .then(() => tasksService.getTasks())
      .then(() => chai.expect(_mockServerService.get.calledOnce).to.be.true);
  });
});