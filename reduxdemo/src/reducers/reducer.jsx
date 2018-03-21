import { combineReducers } from 'redux'
import { ADD_TODO } from './actions'

const defaultTodo =[{
    value:1
}]

function todos(state = defaultTodo, action) {
  switch (action.type) {
    case ADD_TODO:
      return action.text
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos
})

export default todoApp