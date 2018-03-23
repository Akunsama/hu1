import { combineReducers } from 'redux'
import { ADD_TODO } from './actions'

const initState = []

function todos(state = initState, action) {
switch (action.type) {
case ADD_TODO:
return [
...todos, action.payload
]
default:
return state
}
}

const todoApp = combineReducers({
todos
})

export default todoApp