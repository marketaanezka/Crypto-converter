import React from 'react';

import Theme from './common/ThemeProvider';
import MainPage from './pages/MainPage/MainPage';
import CryptoDataProvider from './state/provider';

const App = (): JSX.Element => {
  return (
    <CryptoDataProvider>
      <Theme>
        <div className="App">
          <MainPage />
        </div>
      </Theme>
    </CryptoDataProvider>
  );
};

export default App;
