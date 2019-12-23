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
export default function reducer(todos=initialState, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return todos.push(Map(action.payload));
    case 'TOGGLE_TODO':
      return todos.map(t => {
        if(t.get('id') === action.payload) {
          return t.update('isDone', isDone => !isDone);
        } else {
          return t;
        }
      });
    default:
      return todos;
  }
}



// Actions Creators

const uid = () => Math.random().toString(34).slice(2);
export const addTodo = (text) ({
    type: actionTypes.DD_TODO,
    payload: {
      id: uid(),
      isDone: false,
      text: text
    } 
})

export const toggleTodo = (id) ({
    type: actionTypes.TOGGLE_TODO,
    payload: id 
})

