import React from 'react';
import DashboardDisplay from '../DashboardDisplay';
import DashboardHeader from '../DashboardHeader';
import { DashboardWrapper, Title } from './styled';

const Dashboard = (): JSX.Element => {
  return (
    <DashboardWrapper>
      <Title>Current crypto data</Title>
      <DashboardHeader />
      <DashboardDisplay />
    </DashboardWrapper>
  );
};

export default Dashboard;
