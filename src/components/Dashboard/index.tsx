import React, { useContext } from 'react';
import { CryptoDataObject } from '../../config/types';
import { CryptoDataContext } from '../../config/CryptoDataProvider';
import DashboardDisplay from '../DashboardDisplay';

const Dashboard = (): JSX.Element => {
  const context = useContext(CryptoDataContext);
  const cryptoInfo = context as CryptoDataObject;

  return (
    <>{cryptoInfo !== null ? <DashboardDisplay {...cryptoInfo} /> : null}</>
  );
};

export default Dashboard;
