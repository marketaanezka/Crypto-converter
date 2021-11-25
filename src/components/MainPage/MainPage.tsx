import React, { useContext } from 'react';

import { CircularProgress } from '@mui/material';

import { CryptoDataContext } from '../../state/context';
import Converter from '../Converter';
import Dashboard from '../Dashboard';
import ErrorScreen from '../ErrorScreen';
import Layout from '../Layout/';

export const MainPage = (): JSX.Element => {
  const { state } = useContext(CryptoDataContext);
  console.log('main page', state);
  return (
    <Layout>
      {state.error !== null ? (
        <ErrorScreen errorMessage={state.error} />
      ) : state.exchangeRate === null ? (
        <CircularProgress />
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
