import React, { useContext } from 'react';

import { CryptoDataContext } from '../../state/context';
import ErrorScreen from '../ErrorScreen';
import Layout from '../Layout/';
import LoadingScreen from '../LoadingScreen';
import MainScreen from '../MainScreen';

export const MainPage = (): JSX.Element => {
  const { state } = useContext(CryptoDataContext);
  return (
    <Layout>
      {state.error !== null ? (
        <ErrorScreen errorMessage={state.error} />
      ) : state.exchangeRate === null ? (
        <LoadingScreen />
      ) : (
        <MainScreen />
      )}
    </Layout>
  );
};

export default MainPage;
