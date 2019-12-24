import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import todos from './modules/list';
import visibilityFilter from './modules/filter';

// const getMiddlewares = () => {
//   const logger = createLogger({ collapsed: true });
//   return [logger];
// };

// export default (initialState = {}) => {
//   const reducer = combineReducers({ list: listReducer , filter: visibilityFilter});
//   const middlewares = getMiddlewares();

//   return createStore(reducer, initialState, applyMiddleware(...middlewares));
// };
export default combineReducers({
  todos,
  visibilityFilter
});
