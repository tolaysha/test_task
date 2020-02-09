import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import MainTodo from './pages/mainTodo';
import SingleTask from './pages/SingleTask';
import rootReducer from './redux';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/main" component={MainTodo} />
      <Route path="/onetask/:todoid" render={(...props) => (<SingleTask {...props} />)} />
    </BrowserRouter>
  </Provider>
);

export default App;
