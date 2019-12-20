// Initial State
const initialState = {
  test: false,
};

// Action types
const actionTypes = {
  SET_TEST: 'SET_TEST',
};

// Reducer
export default (state = initialState, action = { type: null, payload: null }) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_TEST: {
      return {
        ...state,
        test: payload,
      };
    }
    default: {
      return state;
    }
  }
};

// Actions
export const setTest = (newTest) => ({ type: actionTypes.SET_TEST, payload: newTest });
