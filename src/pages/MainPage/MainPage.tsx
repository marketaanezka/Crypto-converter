import React, { useContext } from 'react';

import Layout from '../../layout/Layout';
import ErrorScreen from '../../screens/ErrorScreen';
import LoadingScreen from '../../screens/LoadingScreen';
import MainScreen from '../../screens/MainScreen';
import { CryptoDataContext } from '../../state/context';

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
