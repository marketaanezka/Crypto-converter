import React, { useState } from 'react';

import DashboardGrid from '../DashboardGrid';
import DashboardHeader from '../DashboardHeader';
import DashboardTable from '../DashboardTable';
import { DashboardWrapper, Title } from './styled';

const Dashboard = (): JSX.Element => {
  const [dashboardView, setDashboardView] = useState('grid');

  return (
    <DashboardWrapper>
      <Title>Current crypto data</Title>
      <DashboardHeader
        handleChangeView={setDashboardView}
        dashboardView={dashboardView}
      />
      {dashboardView === 'grid' && <DashboardGrid />}
      {dashboardView === 'list' && <DashboardTable />}
    </DashboardWrapper>
  );
};

export default Dashboard;
