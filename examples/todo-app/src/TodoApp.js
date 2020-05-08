import React from 'react';
import { arrayOf, string, bool, shape, func } from 'prop-types';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import TodoList from './components/TodoList';
import { connect } from 'react-redux';
import AddItem from './components/AddItem';
import * as actions from './components/todoActions';

const mapStateToProps = ({ todo }) => {
  return {
    items: todo.list
  };
};

const TodoApp = ({ items, addItem }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} />
      <AddItem onAddPressed={addItem} />
      <TodoList items={items} />
    </View>
  );
};

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
  addItem: func
};

const ConnectedTodoApp = connect(mapStateToProps, actions)(TodoApp);

export default ConnectedTodoApp;
