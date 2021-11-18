import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { CryptoDataContext } from '../state/context';
import { darkTheme, theme } from './theme';

type Props = {
  children?: React.ReactChild | React.ReactChild[];
};

const Theme = ({ children }: Props): JSX.Element => {
  const { state } = useContext(CryptoDataContext);
  console.log('theme provider', state);
  return (
    <ThemeProvider theme={state.darkMode ? darkTheme : theme}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
