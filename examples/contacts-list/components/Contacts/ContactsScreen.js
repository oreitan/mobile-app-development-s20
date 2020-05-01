import React from 'react'
import { bool, string, array, func } from 'prop-types'
import { View, TextInput, SafeAreaView, ActivityIndicator, FlatList } from 'react-native'
import { connect } from 'react-redux'
import ContactItem from './ContactItem'
import actions from './ContactsActions'
import styles from './style'
import UserView from '../User/UserView'

const mapStateToProps = ({ contacts, user }) => {
  return {
    isLoading: contacts.isLoading,
    contacts: contacts.contacts,
    fullName: user.name,
    email: user.email
  }
}

class ContactsScreen extends React.Component {
  componentDidMount() {
    this.props.loadContacts()
  }

  render() {
    const { isLoading, contacts, onSearchQueryChange } = this.props
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safeArea} />
        <UserView />
        <TextInput
          placeholder={'Search contact'}
          style={styles.search}
          onChangeText={onSearchQueryChange}
        />
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

ContactsScreen.propTypes = {
  isLoading: bool,
  contacts: array,
  loadContacts: func,
  onSearchQueryChange: func
}
export default connect(mapStateToProps, actions)(ContactsScreen)
