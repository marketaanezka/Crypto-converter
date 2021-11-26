import React from 'react';

import { CircularProgress } from '@mui/material';

import { Screen } from './styled';

const LoadingScreen = (): JSX.Element => (
  <Screen>
    <CircularProgress />
  </Screen>
);

export default LoadingScreen;
