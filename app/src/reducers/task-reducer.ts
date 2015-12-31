import * as taskContants from '../constants/task-contants';

const initialState = {
  userTasks: []
};

export default (state: any = initialState, action: any) => {
  switch (action.type) {
    case taskContants.GET_USER_TASKS:
      return Object.assign({}, state, {
        userTasks: action.tasks
      });
    default:
      return state;
  }
}