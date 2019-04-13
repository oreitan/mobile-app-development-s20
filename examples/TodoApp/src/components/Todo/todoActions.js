import { ADD_ITEM, SET_INPUT_VISIBILITY, TOGGLE_ITEM } from './todoActionTypes'

const addItem = itemText => ({ type: ADD_ITEM, data: { key: itemText, isDone: false } })
const toggleItemDone = item => ({ type: TOGGLE_ITEM, data: { item } })
const setInputVisibility = isVisible => ({ type: SET_INPUT_VISIBILITY, data: isVisible })

const handleAddButtonClick = () => setInputVisibility(true)

const handleAddTodoSubmission = itemText => async dispatch => {
  dispatch(setInputVisibility(false))
  dispatch(addItem(itemText))
}

export default {
  handleAddButtonClick,
  handleAddTodoSubmission,
  toggleItemDone
}
