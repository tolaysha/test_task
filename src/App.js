import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route ,Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import initStore from './redux/index';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import { createStore } from 'redux';
import rootReducer from './redux'
const history = createBrowserHistory
const store = createStore(rootReducer)

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </BrowserRouter>
  </Provider>
);

export default App;
