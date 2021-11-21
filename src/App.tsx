import React from 'react';
import Converter from './components/Converter';
import Layout from './components/Layout/';
import Dashboard from './components/Dashboard';
import Theme from './common/ThemeProvider';
import CryptoDataProvider from './state/provider';
import Table from './components/Table';

const App = (): JSX.Element => {
  return (
    <CryptoDataProvider>
      <Theme>
        <div className="App">
          <Layout>
            <Converter />
            <Dashboard />
            <Table />
          </Layout>
        </div>
      </Theme>
    </CryptoDataProvider>
  );
};

export default App;
