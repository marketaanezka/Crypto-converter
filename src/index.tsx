import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CryptoDataProvider from './config/CryptoDataProvider';

ReactDOM.render(
  <React.StrictMode>
    <CryptoDataProvider>
      <App />
    </CryptoDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
