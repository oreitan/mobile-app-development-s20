import React from 'react';
import { arrayOf, string, bool, shape, func } from 'prop-types';
import { FlatList, View, Text } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ items, onToggleItem }) => {
  return (
    <FlatList
      keyExtractor={item => item.id}
      data={items}
      renderItem={({ item }) => (
        <TodoItem text={item.text} isDone={item.isDone} onPress={() => onToggleItem(item.id)} />
      )}
      ListEmptyComponent={() => (
        <View>
          <Text>no items</Text>
        </View>
      )}
    />
  );
};

TodoList.propTypes = {
  items: arrayOf(
    shape({
      id: string,
      text: string,
      isDone: bool
    })
  ),
  onToggleItem: func
};

export default TodoList;
