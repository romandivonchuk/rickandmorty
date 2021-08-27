import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css'
import  ServiceContext from './components/serviceContext';
import { Provider } from 'react-redux'
import store from './store'
import Service from './service/service'
const service = new Service()
ReactDOM.render(

  <Provider store={store}>
    <ServiceContext.Provider value={service}>
      <App />
    </ServiceContext.Provider>
  </Provider>,
  document.getElementById('root')
);

