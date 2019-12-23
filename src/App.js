import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import initStore from './redux';
import TodoList from './components/TodoList';

const store = initStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <TodoList />
    </BrowserRouter>
  </Provider>
);

export default App;
