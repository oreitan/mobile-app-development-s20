import { combineReducers } from 'redux';
import todoReducer from './components/todoReducer';

export default combineReducers({
  todo: todoReducer
});
