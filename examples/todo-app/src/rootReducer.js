import { combineReducers } from 'redux';
import todoReducer from './components/Todo/todoReducer';
import visibilityReducer from './components/Visibility/visibilityReducer';

export default combineReducers({
  todo: todoReducer,
  visibility: visibilityReducer
});
