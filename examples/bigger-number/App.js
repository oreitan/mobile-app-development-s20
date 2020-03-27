import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const LEFT = 'LEFT'
const RIGHT = 'RIGHT'

function Result(props) {
  return props.isCorrect ? (
    <Text style={[styles.good, styles.result]}>Good</Text>
  ) : (
    <Text style={[styles.bad, styles.result]}>Bad</Text>
  )
}

function NumberController({ number, onPress }) {
  return (
    <View>
      <Text>{number}</Text>
      <Button onPress={onPress} title={'this is bigger'} />
    </View>
  )
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isCorrect: true,
      showResult: false,
      leftNumber: Math.floor(Math.random() * 100),
      rightNumber: Math.floor(Math.random() * 100)
    }
  }

  checkUserChoice(side) {
    if (side === LEFT && this.state.leftNumber >= this.state.rightNumber) {
      this.setState({ showResult: true, isCorrect: true })
    } else if (side === RIGHT && this.state.rightNumber >= this.state.leftNumber) {
      this.setState({ showResult: true, isCorrect: true })
    } else {
      this.setState({ showResult: true, isCorrect: false })
    }
  }

  render() {
    const { showResult, isCorrect, leftNumber, rightNumber } = this.state

    return (
      <View style={styles.container}>
        <NumberController number={leftNumber} onPress={() => this.checkUserChoice(LEFT)} />
        {showResult && <Result isCorrect={isCorrect} />}
        <NumberController number={rightNumber} onPress={() => this.checkUserChoice(RIGHT)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  result: {
    fontSize: 40
  },
  good: {
    color: '#00ff11'
  },
  bad: {
    color: 'red'
  }
})
