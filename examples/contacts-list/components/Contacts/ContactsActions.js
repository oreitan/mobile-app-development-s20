import { CONTACTS_LOADED, SEARCH_QUERY_CHANGED } from './ContactsActionTypes'
import * as Contacts from 'expo-contacts'

const loadContacts = () => async dispatch => {
  const { status } = await Contacts.requestPermissionsAsync()
  if (status === 'granted') {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers]
    })
    dispatch({ type: CONTACTS_LOADED, contacts: data })
  } else {
    console.log('no permissions')
  }
}

const onSearchQueryChange = searchQuery => {
  return { type: SEARCH_QUERY_CHANGED, searchQuery }
}

export default { loadContacts, onSearchQueryChange }
