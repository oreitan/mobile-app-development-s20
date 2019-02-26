import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  itemWrapper: {
    borderWidth: 1
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: 'black'
  }
})

const TodoListItem = ({ label, isDone }) => (
  <View style={styles.itemWrapper}>
    <Text
      style={StyleSheet.flatten([
        styles.item,
        { textDecorationLine: isDone ? 'line-through' : 'none' }
      ])}
    >
      {label}
    </Text>
  </View>
)

TodoListItem.propTypes = {
  label: PropTypes.string,
  isDone: PropTypes.bool
}
export default TodoListItem
