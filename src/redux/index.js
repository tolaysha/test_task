import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import listReducer from './modules/list';

const getMiddlewares = () => {
  const logger = createLogger({ collapsed: true });
  return [logger];
};

export default (initialState = {}) => {
  const reducer = combineReducers({ list: listReducer });
  const middlewares = getMiddlewares();

  return createStore(reducer, initialState, applyMiddleware(...middlewares));
};
