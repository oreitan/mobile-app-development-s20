import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../src/rootReducer'
import todoActions from '../src/components/Todo/todoActions'

const middleware = applyMiddleware(thunk)
const composedEnhancers = compose(middleware)
const initialState = {}

describe('todo redux e2e functionality', function() {
  test('add todo action adds new todo item', function() {
    const store = createStore(rootReducer, initialState, composedEnhancers)
    expect(store.getState().todo).toHaveProperty('items', [])
    store.dispatch(todoActions.handleAddTodoSubmission('bla bla bla'))

    expect(store.getState().todo).toHaveProperty('items', [{ key: 'bla bla bla', isDone: false }])
  })
})
