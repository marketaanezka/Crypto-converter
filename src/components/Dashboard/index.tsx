import React, { useContext, useState } from 'react';
import {
  CryptoDataObject,
  // DashboardCurrency
} from '../../config/types';
import { CryptoDataContext } from '../../state/CryptoDataProvider';
import DashboardDisplay from '../DashboardDisplay';
import DashboardHeader from '../DashboardHeader';
import { DashboardWrapper } from './styled';
import { SelectChangeEvent, Typography } from '@mui/material';

const Dashboard = (): JSX.Element => {
  const context = useContext(CryptoDataContext);
  const cryptoInfo = context as CryptoDataObject;
  const [dashboardCurrency, setDashboardCurrency] = useState<string>('usd');
  const handleChangeDashboardCurrency = (e: SelectChangeEvent<string>) => {
    setDashboardCurrency(e.target.value);
    console.log('dashboard currency changed from', dashboardCurrency);
  };

  return (
    <DashboardWrapper>
      <Typography variant="h4" align="center" gutterBottom>
        Current crypto data
      </Typography>
      <DashboardHeader
        dashboardCurrency={dashboardCurrency}
        onChangeDashboardCurrency={handleChangeDashboardCurrency}
      />
      {cryptoInfo !== null ? (
        <DashboardDisplay
          {...cryptoInfo}
          // dashboardCurrency={dashboardCurrency as DashboardCurrency}
        />
      ) : null}
    </DashboardWrapper>
  );
};

export default Dashboard;
