import React, { useEffect } from 'react';

import Theme from './common/ThemeProvider';
import MainPage from './pages/MainPage/MainPage';
import CryptoDataProvider from './state/provider';

const App = (): JSX.Element => {
  useEffect(() => {
    document.title = 'Crypto converter';
  }, []);
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
