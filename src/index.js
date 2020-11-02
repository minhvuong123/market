import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './farm/app/App.component';
import 'antd/dist/antd.css';
import './scss/styles.scss';
import { createStore } from 'redux'; 
import rootReducers from './redux/reducers';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducers);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store} >
      <AppComponent />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
