import { FILTER_CHANGED } from './visibilityActionTypes';

export const FILTERS = {
  ALL: 'ALL',
  COMPLETED: 'COMPLETED',
  UNCOMPLETED: 'UNCOMPLETED'
};

const initialState = {
  filter: FILTERS.ALL
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CHANGED:
      return {
        ...state,
        filter: action.filter
      };
    default:
      return state;
  }
};
