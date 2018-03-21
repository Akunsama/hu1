<<<<<<< HEAD
import { combineReducers } from "redux";
import { ADD_TODO } from "./actions";

const initState = [];

function todos(state = initState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...todos, action.payload];
    default:
      return state;
=======
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
>>>>>>> 24c994fed3d9d4853703c444a3b6a786be656646
  }
}

const todoApp = combineReducers({
  todos
<<<<<<< HEAD
});

export default todoApp;
=======
})

export default todoApp
>>>>>>> 24c994fed3d9d4853703c444a3b6a786be656646
