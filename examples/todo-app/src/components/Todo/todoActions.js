import { ADD_ITEM, TOGGLE_ITEM, DELETE_ITEM } from './todoActionTypes';

export const addItem = text => {
  return {
    type: ADD_ITEM,
    todo: { id: Date.now().toString(), text, isDone: false }
  };
};

export const toggleItem = id => {
  return {
    type: TOGGLE_ITEM,
    id
  };
};

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    id
  };
};
