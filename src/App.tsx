import React from 'react';
import Converter from './components/Converter';
import Layout from './components/Layout/';
import Dashboard from './components/Dashboard';
import Theme from './common/ThemeProvider';
import CryptoDataProviderNew from './state/provider';

const App = (): JSX.Element => {
  return (
    <Theme>
      <CryptoDataProviderNew>
        <div className="App">
          <Layout>
            <Converter />
            <Dashboard />
          </Layout>
        </div>
      </CryptoDataProviderNew>
    </Theme>
  );
};

export default App;
