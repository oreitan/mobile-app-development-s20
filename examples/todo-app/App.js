import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/rootReducer';
import TodoApp from './src/TodoApp';

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}
