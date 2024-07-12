import React from 'react';
import ReactDOM from 'react-dom';
import firebaseConfig from './firebase.config';
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './redux/store';
import './index.css';
import App from './App';
import './App.css';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
  <ReduxProvider store={store} >
  <ContextProvider>
     <App /> 
  </ContextProvider>
  </ReduxProvider>,
  document.getElementById('root')
);
