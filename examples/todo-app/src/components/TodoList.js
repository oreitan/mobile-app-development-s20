import React from 'react';
import { arrayOf, string, bool, shape } from 'prop-types';
import { FlatList, View, Text } from 'react-native';

const TodoList = ({ items }) => {
  console.log({ items });
  return (
    <FlatList
      keyExtractor={item => item.id}
      data={items}
      renderItem={({ item }) => {
        return (
          <View>
            <Text>{item.text}</Text>
          </View>
        );
      }}
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
  )
};

export default TodoList;
