import React, { useReducer, useEffect } from 'react';
import { cryptoQuery, fiatQuery, URL_BASE } from '../config/data';
import { formatAPIdata } from '../utils/format-data';
import { CryptoDataContext } from './context';
import {
  cryptoDataReducer,
  setCryptoDataObject,
  setCryptoDetails,
} from './reducer';
import { initialCryptoDataState } from './state';

type Props = {
  children: React.ReactChild | React.ReactChild[];
};

const CryptoDataProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(
    cryptoDataReducer,
    initialCryptoDataState
  );

  useEffect(() => {
    getExchangeRate(URL_BASE, cryptoQuery, fiatQuery);
  }, []);

  // https://stackoverflow.com/questions/53146795/react-usereducer-async-data-fetch
  const getExchangeRate = async (
    url: string,
    crypto: string,
    currency: string
  ): Promise<void> => {
    try {
      const response = await fetch(
        `${url}/price?ids=${crypto}&vs_currencies=${currency}&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`
      );
      const data = await response.json();
      dispatch(setCryptoDataObject(data));
      dispatch(setCryptoDetails(formatAPIdata(data)));
    } catch (err) {
      console.error('rejected', err);
    }
  };

  return (
    <CryptoDataContext.Provider value={{ state, dispatch }}>
      {children}
    </CryptoDataContext.Provider>
  );
};

export default CryptoDataProvider;
