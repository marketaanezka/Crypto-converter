import React from 'react';
import Converter from './components/Converter';
import { Container } from '@mui/material';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Container
        sx={{
          backgroundColor: '#e9e9e9',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Converter />
      </Container>
    </div>
  );
};

export default App;
