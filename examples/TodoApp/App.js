import React, { Component, Fragment } from 'react'
import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import TodoList from './src/components/Todo/TodoList'

const cyanColor = 'rgb(97, 149, 200)'
const styles = StyleSheet.create({
  safeAreaTop: {
    flex: 0,
    backgroundColor: cyanColor
  },
  safeAreaBottom: {
    flex: 1,
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    backgroundColor: cyanColor,
    padding: 10,
    fontSize: 36,
    textAlign: 'center'
  }
})

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <SafeAreaView style={styles.safeAreaTop} />
        <SafeAreaView style={styles.safeAreaBottom}>
          <View style={styles.container}>
            <Text style={styles.header}>My Todo App</Text>
            <TodoList />
          </View>
        </SafeAreaView>
      </Fragment>
    )
  }
}
