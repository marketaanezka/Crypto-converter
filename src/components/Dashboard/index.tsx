import React, { useContext } from 'react';
import { CryptoDataObject } from '../../config/types';
import { CryptoDataContext } from '../../config/CryptoDataProvider';
import DashboardDisplay from '../DashboardDisplay';
import { DashboardWrapper } from './styled';
import { Typography } from '@mui/material';

const Dashboard = (): JSX.Element => {
  const context = useContext(CryptoDataContext);
  const cryptoInfo = context as CryptoDataObject;

  return (
    <DashboardWrapper>
      <Typography variant="h4" align="center" gutterBottom>
        Current crypto data
      </Typography>
      {cryptoInfo !== null ? <DashboardDisplay {...cryptoInfo} /> : null}
    </DashboardWrapper>
  );
};

export default Dashboard;
