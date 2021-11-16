import React, { createContext, useState, FC, useEffect } from 'react';
import { CryptoDataObject } from '../config/types';
import { URL_BASE, fiatQuery, cryptoQuery } from '../config/data';

export const CryptoDataContext = createContext<CryptoDataObject | null>(null);

const CryptoDataProvider: FC = ({ children }) => {
  const [rates, setRates] = useState<CryptoDataObject | null>(null);
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
