import { ADD_ITEM, SET_INPUT_VISIBILITY, TOGGLE_ITEM } from './todoActionTypes'

const addItem = itemText => ({ type: ADD_ITEM, data: { key: itemText, isDone: false } })

const setInputVisibility = isVisible => ({ type: SET_INPUT_VISIBILITY, data: isVisible })

const handleAddButtonClick = () => setInputVisibility(true)

const handleAddTodoSubmission = itemText => async dispatch => {
  dispatch(setInputVisibility(false))
  await getSomething()
  dispatch(addItem(itemText))
}

function a(itemText) {
  return function b(dispatch) {}
}
const toggleItemDone = item => ({ type: TOGGLE_ITEM, data: { item } })

function c(item) {
  return { type: TOGGLE_ITEM, data: { item } }
}

export default {
  handleAddButtonClick,
  handleAddTodoSubmission,
  toggleItemDone
}
