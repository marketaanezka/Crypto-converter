import React from 'react';
import DashboardDisplay from '../DashboardDisplay';
import DashboardHeader from '../DashboardHeader';
import { DashboardWrapper } from './styled';
import { Typography } from '@mui/material';

const Dashboard = (): JSX.Element => {
  return (
    <DashboardWrapper>
      <Typography variant="h4" align="center" gutterBottom>
        Current crypto data
      </Typography>
      <DashboardHeader />
      <DashboardDisplay />
    </DashboardWrapper>
  );
};

export default Dashboard;
