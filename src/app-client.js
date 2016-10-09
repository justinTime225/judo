import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

// window.onload = () => {

  ReactDOM.render(
    <Provider store={store}>
      <AppRoutes/>
    </Provider>
    , document.getElementById('main'));
// };
