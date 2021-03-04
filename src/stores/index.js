import { createStore, combineReducers } from 'redux';
import todos from '../reducers/todos';

const store = createStore(
  combineReducers({
    todos,
  })
);

export default store;
