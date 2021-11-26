import React, { useEffect, useReducer } from 'react';

import { cryptoQuery, fiatQuery, URL_BASE } from '../config/data';
import { formatAPIdata } from '../utils/format-data';
import { CryptoDataContext } from './context';
import {
  cryptoDataReducer,
  setCryptoDataObject,
  setCryptoDetails,
  setError,
} from './reducer';
import { initialCryptoDataState } from './state';

type Props = {
  children: React.ReactChild | React.ReactChild[];
};

const CryptoDataProvider = ({ children }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(
    cryptoDataReducer,
    initialCryptoDataState
  );

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
        `${url}/price?ids=${crypto}&vs_currencies=${currency}&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`
      );
      if (response.status === 200) {
        const data = await response.json();
        dispatch(setCryptoDataObject(data));
        dispatch(setCryptoDetails(formatAPIdata(data)));
      } else {
        dispatch(setError(`error ${response.status.toString()}`));
        console.log('Error response: ', response);
      }
    } catch (err) {
      dispatch(setError('unexpected error'));
      console.error('Error caught: ', err);
    }
  };

  return (
    <CryptoDataContext.Provider value={{ state, dispatch }}>
      {children}
    </CryptoDataContext.Provider>
  );
};

export default CryptoDataProvider;
