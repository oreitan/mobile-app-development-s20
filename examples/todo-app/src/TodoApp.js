import React from 'react';
import { arrayOf, string, bool, shape, func } from 'prop-types';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import TodoList from './components/Todo/TodoList';
import { connect } from 'react-redux';
import AddItem from './components/AddItem/AddItem';
import * as actions from './components/Todo/todoActions';
import Visibility from './components/Visibility/Visibility';
import { getVisibleTodos } from './utils/utilities';

const mapStateToProps = ({ todo, visibility }) => {
  return {
    items: getVisibleTodos(todo.list, visibility.filter)
  };
};

const TodoApp = ({ items, addItem, toggleItem }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} />
      <AddItem onAddPressed={addItem} />
      <TodoList items={items} onToggleItem={toggleItem} />
      <Visibility />
    </View>
  );
};

const ConnectedTodoApp = connect(mapStateToProps, actions)(TodoApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  safeArea: {
    backgroundColor: '#333333'
  }
});

TodoApp.propTypes = {
  items: arrayOf(
    shape({
      id: string,
      text: string,
      isDone: bool
    })
  ),
  addItem: func,
  toggleItem: func
};

export default ConnectedTodoApp;
