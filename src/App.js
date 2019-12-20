import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import initStore from './redux';

const store = initStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>Test App</div>
    </BrowserRouter>
  </Provider>
);

export default App;
