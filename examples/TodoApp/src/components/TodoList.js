import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, FlatList, TextInput } from 'react-native'
import TodoListItem from './TodoListItem'

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

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { key: 'Laundry', isDone: false },
        { key: 'Shopping', isDone: false },
        { key: 'Call lawyer', isDone: false }
      ],
      showAddItemInput: false,
      addTodoText: ''
    }
    this.toggleItemDone = this.toggleItemDone.bind(this)
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this)
    this.handleAddTodoSubmission = this.handleAddTodoSubmission.bind(this)
  }

  handleAddButtonClick() {
    this.setState({ showAddItemInput: true })
  }

  handleAddTodoSubmission() {
    this.setState({
      showAddItemInput: false,
      addTodoText: '',
      items: this.state.addTodoText
        ? this.state.items.concat({ key: this.state.addTodoText })
        : this.state.items
    })
  }

  toggleItemDone(item) {
    const items = this.state.items.filter(i => i.key !== item.key)
    const newItem = { ...item, isDone: !item.isDone }
    this.setState({ items: [...items, newItem] })
  }

  render() {
    return (
      <View>
        <View style={styles.addNewSection}>
          <Text>{`Todos: ${this.state.items.length}`}</Text>
          <Button title={'Add Item'} onPress={this.handleAddButtonClick} />
        </View>
        {this.state.showAddItemInput && (
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Type here to translate!"
              onChangeText={text => this.setState({ addTodoText: text })}
              onSubmitEditing={this.handleAddTodoSubmission}
            />
          </View>
        )}
        <FlatList
          style={styles.list}
          data={this.state.items}
          renderItem={({ item }) => (
            <TodoListItem
              key={item.key}
              label={item.key}
              isDone={item.isDone}
              onPress={() => this.toggleItemDone(item)}
            />
          )}
        />
      </View>
    )
  }
}

export default TodoList
