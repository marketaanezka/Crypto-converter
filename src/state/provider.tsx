import React, { useReducer, useEffect } from 'react';
import { cryptoQuery, fiatQuery, URL_BASE } from '../config/data';
import { formatAPIdata } from '../utils/format-data';
import { CryptoDataContextNew } from './context';
import {
  cryptoDataReducer,
  setCryptoDataObject,
  setCryptoDetails,
} from './reducer';
import { initialCryptoDataState } from './state';

type Props = {
  children: React.ReactChild | React.ReactChild[];
};

const CryptoDataProviderNew = ({ children }: Props) => {
  const [state, dispatch] = useReducer(
    cryptoDataReducer,
    initialCryptoDataState
  );

  useEffect(() => {
    console.log('useeffect in provider run');
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
      dispatch(setCryptoDataObject(data));
      dispatch(setCryptoDetails(formatAPIdata(data)));
    } catch (err) {
      console.error('rejected', err);
    }
  };

  return (
    <CryptoDataContextNew.Provider value={{ state, dispatch }}>
      {children}
    </CryptoDataContextNew.Provider>
  );
};

export default CryptoDataProviderNew;
