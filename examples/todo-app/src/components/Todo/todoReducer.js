import { ADD_ITEM, TOGGLE_ITEM, DELETE_ITEM } from './todoActionTypes';

// TODO Item
// { id: number, text: string, isDone: boolean }

const initialState = {
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        list: state.list.concat(action.todo)
      };
    case TOGGLE_ITEM: {
      const todoItem = state.list.find(item => item.id === action.id);
      todoItem.isDone = !todoItem.isDone;
      const newList = state.list.filter(item => item.id !== action.id); // new list without the toggled item
      return {
        ...state,
        list: newList.concat(todoItem)
      };
    }
    case DELETE_ITEM:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.id)
      };
    default:
      return state;
  }
};
