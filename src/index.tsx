import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CryptoDataProvider from './config/CryptoDataProvider';

console.log(
  'This project is under construction now, checkout github repo https://github.com/marketaanezka/Crypto-converter'
);

ReactDOM.render(
  <React.StrictMode>
    <CryptoDataProvider>
      <App />
    </CryptoDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
