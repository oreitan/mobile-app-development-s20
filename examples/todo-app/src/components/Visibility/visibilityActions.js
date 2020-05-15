import { FILTER_CHANGED } from './visibilityActionTypes';

export const changeVisibilityFilter = filter => {
  return { type: FILTER_CHANGED, filter };
};
