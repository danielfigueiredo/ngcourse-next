import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducers/index';
const thunk = require('redux-thunk');

const finalCreateStore = compose(
    applyMiddleware(thunk)
)(createStore);

export default () => {
  return finalCreateStore(reducer);
}