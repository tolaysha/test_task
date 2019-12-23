import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import initStore from './redux';
import AddTodo from './containers/AddTodo';

const store = initStore();
store.subscribe(()=>{
  console.log(`subscribe ${store.getState()}`)
})
console.log(store.getState())

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AddTodo />
    </BrowserRouter>
  </Provider>
);

export default App;
