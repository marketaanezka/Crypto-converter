import React, { useReducer } from 'react';
import Converter from './components/Converter';
import Layout from './components/Layout/';
import Dashboard from './components/Dashboard';
import Theme from './common/ThemeProvider';
import { initialCryptoDataState } from './state/state';
import { cryptoDataReducer } from './state/reducer';
import { CryptoDataContextReducer } from './state/context';

const App = (): JSX.Element => {
  const [state, dispatch] = useReducer(
    cryptoDataReducer,
    initialCryptoDataState
  );
  return (
    <Theme>
      <CryptoDataContextReducer.Provider value={{ state, dispatch }}>
        <div className="App">
          <Layout>
            <Converter />
            <Dashboard />
          </Layout>
        </div>
      </CryptoDataContextReducer.Provider>
    </Theme>
  );
};

export default App;
