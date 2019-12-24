import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import initStore from './redux/index';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import { createStore } from 'redux';
import rootReducer from './redux'

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
