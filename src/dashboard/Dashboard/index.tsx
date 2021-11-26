import React, { useContext, useState } from 'react';

import { FormattedCryptoObject } from '../../config/types';
import { CryptoDataContext } from '../../state/context';
import DashboardGrid from '../DashboardGrid';
import DashboardHeader from '../DashboardHeader';
import DashboardTable from '../DashboardTable';
import { DashboardWrapper, Title } from './styled';

const Dashboard = (): JSX.Element => {
  const [dashboardView, setDashboardView] = useState('grid');
  const { state } = useContext(CryptoDataContext);
  const currentData = state.cryptoDetails as FormattedCryptoObject[];
  const currency = state.dashboardCurrency;
  return (
    <DashboardWrapper>
      <Title>Current crypto data</Title>
      <DashboardHeader
        handleChangeView={setDashboardView}
        dashboardView={dashboardView}
      />
      {dashboardView === 'grid' && (
        <DashboardGrid cryptoData={currentData} currency={currency} />
      )}
      {dashboardView === 'list' && (
        <DashboardTable cryptoData={currentData} currency={currency} />
      )}
    </DashboardWrapper>
  );
};

export default Dashboard;
