import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './farm/app/App.component';
import 'antd/dist/antd.css';
import './scss/styles.scss';
import { createStore, applyMiddleware } from 'redux'; 
import rootReducers from './redux/reducers';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from 'redux/saga/saga';
const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducers);

// const store = createStore(
//   rootReducers,
//   applyMiddleware(sagaMiddleware)
// )

// sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store} >
      <AppComponent />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
