import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import configStore from './redux/configStore';
ReactDOM.render(
  <Provider store={configStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);