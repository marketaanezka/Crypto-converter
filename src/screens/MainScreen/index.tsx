import React from 'react';

import Converter from '../../converter/Converter';
import Dashboard from '../../dashboard/Dashboard';

const MainScreen = (): JSX.Element => (
  <>
    <Converter />
    <Dashboard />
  </>
);

export default MainScreen;
