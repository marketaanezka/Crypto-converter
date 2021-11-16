import React, { createContext } from 'react';
import { Actions } from './actions';
import { CryptoDataState, initialCryptoDataState } from './state';

export const CryptoDataContextReducer = createContext<{
  state: CryptoDataState;
  dispatch: React.Dispatch<Actions>;
}>({
  state: initialCryptoDataState,
  dispatch: () => undefined,
});
