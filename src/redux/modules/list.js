// Initial State
const initialState = require('../../assets/files/list.json');
function readabledate(created){
  let q = new Date(created).getDate()+
      '.' + ((new Date(created).getMonth() < 10 )
                ?'0' + new Date(created).getMonth() + 1
                :(new Date(created).getMonth() + 1)) +
      '.' + new Date(created).getFullYear() +
      ' ' + new Date(created).getHours() +                 //это костыли, сорян, сяда надо moment.js подключать и с ней работать
      ':' + ((new Date(created).getMinutes() < 10 )
                ?'0' + new Date(created).getMinutes()
                :(new Date(created).getMinutes()))
  return q;
}
initialState.todos = initialState.todos
  .sort(function (a, b) {
    if (new Date(a.created).valueOf() > new Date(b.created).valueOf()) {
      return -1;
    }
    if (new Date(a.created).valueOf() < new Date(b.created).valueOf()) {
      return 1;
    }
    return 0;
  })
  .map(item=>{ 
    return {...item, created : readabledate(item.created)}
  })

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
const todos = (state = initialState.todos, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          done: false,
          created: readabledate(new Date().toISOString())
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, done: !todo.done}
          : todo
      )
    default:
      return state
  }
}

export default todos




// Actions Creators

let nextTodoId = 0
export const addTodo = name => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  name
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})


