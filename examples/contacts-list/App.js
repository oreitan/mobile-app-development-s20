import React from 'react'
import { StyleSheet, Text, View, TextInput, SafeAreaView, ActivityIndicator } from 'react-native'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }
  componentDidMount() {
    // loadContacts...
  }

  render() {
    const { isLoading } = this.state
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safeArea} />
        <TextInput placeholder={'Search contact'} style={styles.search} />
        <View style={styles.content}>
          {isLoading ? (
            <View styles={styles.indicator}>
              <ActivityIndicator size={'large'} color={'#2fcccc'} />
            </View>
          ) : null}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    backgroundColor: 'red'
  },
  safeArea: {
    backgroundColor: '#2f363c'
  },
  search: {
    borderColor: '#2f363c',
    borderStyle: 'solid',
    borderWidth: 1,
    height: 40,
    fontSize: 28,
    padding: 10
  },
  indicator: {
    ...StyleSheet.absoluteFill,
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2f363c'
  }
})
