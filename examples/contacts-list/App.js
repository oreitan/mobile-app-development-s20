import React from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  SafeAreaView,
  ActivityIndicator,
  FlatList
} from 'react-native'
import * as Contacts from 'expo-contacts'
import ContactItem from './components/ContactItem'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      contacts: []
    }
  }

  async componentDidMount() {
    const { status } = await Contacts.requestPermissionsAsync()
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers]
      })
      this.setState({ isLoading: false, contacts: data })
    } else {
      console.log('no permissions')
    }
  }

  render() {
    const { isLoading, contacts } = this.state
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safeArea} />
        <TextInput placeholder={'Search contact'} style={styles.search} />
        <View style={styles.content}>
          {isLoading ? (
            <View styles={styles.indicator}>
              <ActivityIndicator size={'large'} color={'#2fcccc'} />
            </View>
          ) : (
            <FlatList
              data={contacts}
              renderItem={({ item }) => (
                <ContactItem
                  name={item.name}
                  number={item.phoneNumbers ? item.phoneNumbers[0].number : ''}
                />
              )}
              keyExtractor={item => item.id}
            />
          )}
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
    flex: 1
    // backgroundColor: 'red'
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
