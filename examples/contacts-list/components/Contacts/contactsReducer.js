import { CONTACTS_LOADED, SEARCH_QUERY_CHANGED } from './ContactsActionTypes'

const initialState = {
  contacts: [],
  memoizeContacts: [],
  isLoading: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CONTACTS_LOADED:
      return {
        ...state,
        contacts: action.contacts,
        memoizeContacts: action.contacts,
        isLoading: false
      }
    case SEARCH_QUERY_CHANGED:
      return {
        ...state,
        contacts: state.memoizeContacts.filter(contact => contact.name.includes(action.searchQuery))
      }
    default:
      return state
  }
}
