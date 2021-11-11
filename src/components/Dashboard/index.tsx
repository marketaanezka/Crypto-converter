import React, { useContext } from 'react';
import { CryptoData } from '../../config/types';
import { CryptoDataContext } from '../../config/CryptoDataProvider';

const Dashboard = (): JSX.Element => {
  const context = useContext(CryptoDataContext);
  const cryptoInfo = context as CryptoData;

  return <pre>{JSON.stringify(cryptoInfo)}</pre>;
};

export default Dashboard;
