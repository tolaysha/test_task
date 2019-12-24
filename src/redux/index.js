import { createStore, combineReducers, applyMiddleware } from 'redux';

import todos from './modules/list';
import visibilityFilter from './modules/filter';


// export default (initialState = {}) => {
//   const reducer = combineReducers({ list: listReducer , filter: visibilityFilter});
//   const middlewares = getMiddlewares();

//   return createStore(reducer, initialState, applyMiddleware(...middlewares));
// };
export default combineReducers({
  todos,
  visibilityFilter,
});
