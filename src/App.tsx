import React from 'react';
import Converter from './components/Converter';
import { AppWrapper } from './components/AppWrapper/styles';
import Theme from './common/ThemeProvider';

const App = (): JSX.Element => {
  return (
    <Theme>
      <div className="App">
        <AppWrapper>
          <Converter />
        </AppWrapper>
      </div>
    </Theme>
  );
};

export default App;
