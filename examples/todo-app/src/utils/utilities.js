import { FILTERS } from '../components/Visibility/visibilityReducer';

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case FILTERS.ALL:
      return todos;
    case FILTERS.COMPLETED:
      return todos.filter(item => item.isDone);
    case FILTERS.UNCOMPLETED:
      return todos.filter(item => !item.isDone);
  }
};
