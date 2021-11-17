import React from 'react';
import Converter from './components/Converter';
import Layout from './components/Layout/';
import Dashboard from './components/Dashboard';
import Theme from './common/ThemeProvider';
import CryptoDataProvider from './state/provider';

const App = (): JSX.Element => {
  return (
    <Theme>
      <CryptoDataProvider>
        <div className="App">
          <Layout>
            <Converter />
            <Dashboard />
          </Layout>
        </div>
      </CryptoDataProvider>
    </Theme>
  );
};

export default App;
