import React, { createContext, useState, FC, useEffect } from 'react';
import { ExchangeRates } from './types';
import { URL_BASE, fiatQuery, cryptoQuery } from './data';

export const ExchangeRatesContext = createContext<ExchangeRates | null>(null);

const ExchangeRatesProvider: FC = ({ children }) => {
  const [rates, setRates] = useState<ExchangeRates | null>(null);
  useEffect(() => {
    getExchangeRate(URL_BASE, cryptoQuery, fiatQuery);
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
      setRates(data);
      console.log(data);
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
