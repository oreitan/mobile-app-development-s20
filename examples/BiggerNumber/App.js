/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
const LEFT_BUTTON = 0
const RIGHT_BUTTON = 1
const generateNumbers = () => ({
  left: (Math.random() * 100).toFixed(),
  right: (Math.random() * 100).toFixed()
})

export default class App extends Component {
  constructor(props) {
    super(props)
    const numbers = generateNumbers()
    this.state = {
      correct: false,
      left: numbers.left,
      right: numbers.right
    }
    this.handlePress = this.handlePress.bind(this)
  }

  handlePress(buttonSide) {
    const { left, right } = this.state
    if (buttonSide === LEFT_BUTTON && left > right) {
      this.setState({ correct: true })
    } else if (buttonSide === RIGHT_BUTTON && right > left) {
      this.setState({ correct: true })
    } else {
      this.setState({ correct: false })
    }
    const numbers = generateNumbers()
    this.setState({
      left: numbers.left,
      right: numbers.right
    })
  }

  render() {
    const { left, right, correct } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={{ color: correct ? 'green' : 'red' }}>{correct ? 'Good!' : 'Bad :('}</Text>
        <View style={styles.buttons}>
          <Button
            onPress={() => this.handlePress(LEFT_BUTTON)}
            title={`${left}`}
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={() => this.handlePress(RIGHT_BUTTON)}
            title={`${right}`}
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    )
  }
}
