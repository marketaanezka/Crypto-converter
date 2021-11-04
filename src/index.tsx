import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ExchangeRatesProvider from './config/ExchangeProvider';

ReactDOM.render(
  <React.StrictMode>
    <ExchangeRatesProvider>
      <App />
    </ExchangeRatesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
