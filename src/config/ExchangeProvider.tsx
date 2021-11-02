import React, { createContext, useState, FC, useEffect } from 'react';
import { ExchangeRates } from './types';
import { URL_BASE, fiatQuery, cryptoQuery } from './data';

const contextDefaultValues: ExchangeRates = {};

export const ExchangeRatesContext =
  createContext<ExchangeRates>(contextDefaultValues);

const ExchangeRatesProvider: FC = ({ children }) => {
  const [rates, setRates] = useState<ExchangeRates>(contextDefaultValues);

  useEffect(() => {
    getExchangeRate(URL_BASE, cryptoQuery, fiatQuery);
    // console.log(rates);
  }, []);

  const getExchangeRate = async (
    url: string,
    crypto: string,
    currency: string
  ): Promise<void> => {
    try {
      const response = await fetch(
        `${url}/price?ids=${crypto}&vs_currencies=${currency}`
      );
      const data = await response.json();
      // console.log(data);
      setRates(data);
    } catch (err) {
      console.error('rejected', err);
    }
  };

  return (
    <ExchangeRatesContext.Provider value={rates}>
      {children}
    </ExchangeRatesContext.Provider>
  );
};

export default ExchangeRatesProvider;
