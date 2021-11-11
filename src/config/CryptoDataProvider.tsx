import React, { createContext, useState, FC, useEffect } from 'react';
import { CryptoData } from './types';
import { URL_BASE, fiatQuery, cryptoQuery } from './data';

export const CryptoDataContext = createContext<CryptoData | null>(null);

const CryptoDataProvider: FC = ({ children }) => {
  const [rates, setRates] = useState<CryptoData | null>(null);
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
        `${url}/price?ids=${crypto}&vs_currencies=${currency}&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`
      );
      const data = await response.json();
      console.log(data);
      setRates(data);
    } catch (err) {
      console.error('rejected', err);
    }
  };

  return (
    <CryptoDataContext.Provider value={rates}>
      {children}
    </CryptoDataContext.Provider>
  );
};

export default CryptoDataProvider;
