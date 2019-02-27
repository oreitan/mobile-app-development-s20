import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, Text, FlatList, View, Button, TextInput } from 'react-native'
import TodoListItem from './src/components/TodoListItem'

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'cyan'
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  header: {
    backgroundColor: 'cyan',
    padding: 10,
    fontSize: 36,
    textAlign: 'center'
  },
  list: {
    alignContent: 'flex-start'
  },
  addNewSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  textInput: {
    height: 44,
    borderWidth: 1
  }
})

const items = [
  { key: 'Laundry', isDone: false },
  { key: 'Shopping', isDone: true },
  { key: 'Call lawyer', isDone: false }
]

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      showAddItemInput: false,
      addTodoText: ''
    }
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this)
    this.handleAddTodoSubmission = this.handleAddTodoSubmission.bind(this)
    this.toggleItemDone = this.toggleItemDone.bind(this)
  }

  toggleItemDone(item) {
    const items = this.state.items.filter(i => i.key !== item.key)
    const newItem = { ...item, isDone: !item.isDone }
    this.setState({ items: [...items, newItem] })
  }

  handleAddButtonClick() {
    this.setState({ showAddItemInput: true })
  }

  handleAddTodoSubmission() {
    this.setState({
      showAddItemInput: false,
      addTodoText: '',
      items: [...this.state.items, { key: this.state.addTodoText }]
    })
  }

  componentDidMount() {
    this.setState({ items })
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.header}>My Todo App</Text>
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
      </SafeAreaView>
    )
  }
}
