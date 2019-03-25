import { ADD_ITEM, SET_INPUT_VISIBILITY, TOGGLE_ITEM } from './todoActionTypes'

const addItem = itemText => ({ type: ADD_ITEM, data: { key: itemText, isDone: false } })

const setInputVisibility = isVisible => ({ type: SET_INPUT_VISIBILITY, data: isVisible })

const handleAddButtonClick = () => setInputVisibility(true)

const handleAddTodoSubmission = itemText => dispatch => {
  dispatch(setInputVisibility(false))
  dispatch(addItem(itemText))
}

const toggleItemDone = item => ({ type: TOGGLE_ITEM, data: { item } })

export default {
  handleAddButtonClick,
  handleAddTodoSubmission,
  toggleItemDone
}
