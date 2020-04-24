const initialState = {
  contacts: [],
  searchQuery: '',
  isLoading: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CONTACTS_LOADED':
      return {
        ...state,
        contacts: action.contacts
      }
    case 'LOADING_COMPLETE':
      return {
        ...state,
        isLoading: false
      }
    case 'SEARCH_QUERY_CHANGED':
      return {
        ...state,
        searchQuery: action.searchQuery
      }
    default:
      return state
  }
}
