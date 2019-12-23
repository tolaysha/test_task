// Initial State
const initialState = {
  // "todos": [
  //   {
      "id": 42,
      "created": "2019-12-20T11:50:00.000Z",
      "name": "Become a Senior Lead Frontend React Architect",
      "done": false
  //   },
  //   {
  //     "id": 1555,
  //     "created": "2019-12-19T20:00:00.000Z",
  //     "name": "Do magic",
  //     "done": false
  //   },
  //   {
  //     "id": 137,
  //     "created": "2019-12-11T12:00:00.000Z",
  //     "name": "Create React App",
  //     "done": false
  //   },
  //   {
  //     "id": 20,
  //     "created": "2019-12-15T09:12:00.000Z",
  //     "name": "Learn JS",
  //     "done": true
  //   },
  //   {
  //     "id": 215125,
  //     "created": "2018-12-15T11:48:00.000Z",
  //     "name": "Learn HTML/CSS",
  //     "done": true
  //   }
  // ]
};

// Action types
const actionTypes = {
  SET_TEST: 'SET_TEST',
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK' 
};


// Reducer
export default (state = initialState, action = { type: null, payload: null }) => {
  const { type, payload } = action;
  debugger;
  switch (type) {
    case actionTypes.SET_TEST: {
      return {
        ...state,
        test: payload,rfr
      };
    }
    case actionTypes.ADD_TASK: {
      return {
        ...state,
        name: payload,
      };
    }
    default: {
      return state;
    }
  }
};

// Actions
export const setTest = newTest => ({ type: actionTypes.SET_TEST, payload: newTest });
export const addTodo = newText => ({ type: actionTypes.ADD_TASK, payload: newText });
