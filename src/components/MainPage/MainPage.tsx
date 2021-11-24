import React, { useContext } from 'react';

import { CryptoDataContext } from '../../state/context';
import Converter from '../Converter';
import Dashboard from '../Dashboard';
import Layout from '../Layout/';

export const MainPage = (): JSX.Element => {
  const { state } = useContext(CryptoDataContext);
  console.log('main page', state);
  return (
    <Layout>
      {state.exchangeRate === null ? (
        <p>Loading...</p>
      ) : (
        <>
          <Converter />
          <Dashboard />
        </>
      )}
    </Layout>
  );
};

export default MainPage;
