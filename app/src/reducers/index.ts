import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import taskReducer from './task-reducer';

const rootReducer = combineReducers({
  user : userReducer,
  task : taskReducer
});

export default rootReducer;
