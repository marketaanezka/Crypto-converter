import React from 'react';
import Converter from './components/Converter';
import { AppWrapper } from './components/AppWrapper/styled';
import Dashboard from './components/Dashboard';
import Theme from './common/ThemeProvider';

const App = (): JSX.Element => {
  return (
    <Theme>
      <div className="App">
        <AppWrapper>
          <Converter />
          <Dashboard />
        </AppWrapper>
      </div>
    </Theme>
  );
};

export default App;
