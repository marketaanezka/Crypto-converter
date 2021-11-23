import React from 'react';

import Theme from './common/ThemeProvider';
import Converter from './components/Converter';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout/';
import CryptoDataProvider from './state/provider';

const App = (): JSX.Element => {
  return (
    <CryptoDataProvider>
      <Theme>
        <div className="App">
          <Layout>
            <Converter />
            <Dashboard />
          </Layout>
        </div>
      </Theme>
    </CryptoDataProvider>
  );
};

export default App;
