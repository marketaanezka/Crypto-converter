import React from 'react';
import Converter from './components/Converter';
import Layout from './components/Layout/';
import Dashboard from './components/Dashboard';
import Theme from './common/ThemeProvider';

const App = (): JSX.Element => {
  return (
    <Theme>
      <div className="App">
        <Layout>
          <Converter />
          <Dashboard />
        </Layout>
      </div>
    </Theme>
  );
};

export default App;
