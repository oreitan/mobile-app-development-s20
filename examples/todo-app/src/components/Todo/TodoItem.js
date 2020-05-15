import React from 'react';
import { string, bool, func } from 'prop-types';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const composeTextStyle = isDone => [
  styles.text,
  {
    textDecorationLine: isDone ? 'line-through' : 'none'
  }
];

const TodoItem = ({ text, isDone, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemWrapper} onPress={onPress}>
      <Text style={composeTextStyle(isDone)}>{text}</Text>
    </TouchableOpacity>
  );
};

TodoItem.propTypes = {
  text: string,
  isDone: bool,
  onPress: func
};

const styles = StyleSheet.create({
  itemWrapper: {
    borderWidth: 1
  },
  text: {
    padding: 10,
    fontSize: 18
  }
});
export default TodoItem;
