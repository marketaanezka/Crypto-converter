import React from 'react';
import DashboardGrid from '../DashboardGrid';
import DashboardHeader from '../DashboardHeader';
import DashboardTable from '../DashboardTable';
import { DashboardWrapper, Title } from './styled';

const Dashboard = (): JSX.Element => {
  return (
    <DashboardWrapper>
      <Title>Current crypto data</Title>
      <DashboardHeader />
      <DashboardTable />
      <DashboardGrid />
    </DashboardWrapper>
  );
};

export default Dashboard;
