import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, Button, FlatList, TextInput } from 'react-native'
import TodoListItem from './TodoListItem'
import actions from './todoActions'

const styles = StyleSheet.create({
  list: {
    alignContent: 'flex-start'
  },
  addNewSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(97, 149, 200, 0.5)'
  },
  textInput: {
    height: 44,
    borderWidth: 1
  }
})

const mapStateToProps = ({ todo, user }) => {
  return {
    items: todo.items,
    showAddItemInput: todo.showAddItemInput,
    addTodoText: todo.addTodoText,
    userName: user.name
  }
}

class TodoList extends Component {
  state = {
    addTodoText: ''
  }

  render() {
    const {
      items,
      showAddItemInput,
      userName,
      handleAddButtonClick,
      handleAddTodoSubmission,
      toggleItemDone
    } = this.props

    return (
      <View>
        <View style={styles.addNewSection}>
          <Text>{`Hi ${userName}! Todos: ${items.length}`}</Text>
          <Button title={'Add Item'} onPress={handleAddButtonClick} />
        </View>
        {showAddItemInput && (
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Type here to translate!"
              onChangeText={text => this.setState({ addTodoText: text })}
              onSubmitEditing={() => handleAddTodoSubmission(this.state.addTodoText)}
            />
          </View>
        )}
        <FlatList
          style={styles.list}
          data={items}
          renderItem={({ item }) => (
            <TodoListItem
              key={item.key}
              label={item.key}
              isDone={item.isDone}
              onPress={() => toggleItemDone(item)}
            />
          )}
        />
      </View>
    )
  }
}

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ key: PropTypes.string, isDone: PropTypes.bool })),
  showAddItemInput: PropTypes.bool,
  userName: PropTypes.string,
  handleAddButtonClick: PropTypes.func,
  toggleItemDone: PropTypes.func,
  handleAddTodoSubmission: PropTypes.func
}

export default connect(
  mapStateToProps,
  actions
)(TodoList)
