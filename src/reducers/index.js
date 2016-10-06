import { combineReducers } from 'redux';
import athletes from './athletesReducer';
import test from './test';
const rootReducer = combineReducers({
  athletes,
  test
});

export default rootReducer;
