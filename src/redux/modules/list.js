// Initial State
import { combineReducers } from 'redux'

const initialState =  [
  {
    "id": 42,
    "created": "2019-12-20T11:50:00.000Z",
    "name": "Become a Senior Lead Frontend React Architect",
    "done": false
  },
  {
    "id": 1555,
    "created": "2019-12-19T20:00:00.000Z",
    "name": "Do magic",
    "done": false
  },
  {
    "id": 137,
    "created": "2019-12-11T12:00:00.000Z",
    "name": "Create React App",
    "done": false
  },
  {
    "id": 20,
    "created": "2019-12-15T09:12:00.000Z",
    "name": "Learn JS",
    "done": true
  },
  {
    "id": 215125,
    "created": "2018-12-15T11:48:00.000Z",
    "name": "Learn HTML/CSS",
    "done": true
  }
]


// Action types
const actionTypes = {
  DD_TODO : 'ADD_TODO',
  TOGGLE_TODO : 'TOGGLE_TODO',
  EMOVE_TODO : 'REMOVE_TODO',
  HOW_ALL : 'SHOW_ALL',
  HOW_COMPLETED : 'SHOW_COMPLETED',
  HOW_ACTIVE : 'SHOW_ACTIVE',
  ET_VISIBILITY_FILTER : 'SET_VISIBILITY_FILTER'
};


// Reducer
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos




// Actions Creators

let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})


