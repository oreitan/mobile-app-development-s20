import React from 'react'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import ContactsScreen from './components/ContactsScreen'

const middlewares = applyMiddleware(thunk)
const store = createStore(rootReducer, compose(middlewares))

console.log(store.getState())

export default function App() {
  return (
    <Provider store={store}>
      <ContactsScreen />
    </Provider>
  )
}
