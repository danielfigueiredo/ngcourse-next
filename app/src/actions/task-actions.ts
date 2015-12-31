import * as taskContants from '../constants/task-contants';

export var getUserTasks = () => {
  return (dispatch, getState) => {
    let username = getState().user.username;
    let tasks = [{
      "_id": "5612912029j3e3032nz0kj6y",
      "owner": "alice",
      "description": "Do the loundry",
      "__v": 0
    }, {
      "_id": "561291202d77a30300awc64b",
      "owner": "alice",
      "description": "Clean the house",
      "__v": 0
    }, {
      "_id": "561291202d77a30300awc64b",
      "owner": "alice",
      "description": "Study",
      "__v": 0,
      "done": true
    }];
    dispatch({
      type: taskContants.GET_USER_TASKS,
      tasks: tasks.filter((task) => task.owner === username)
    });
  }
};