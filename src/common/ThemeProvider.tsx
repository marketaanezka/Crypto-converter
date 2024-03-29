import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { CryptoDataContext } from '../state/context';
import { darkTheme, theme } from './theme';
import MuiThemeProvider from './muiThemeProvider';

type Props = {
  children: React.ReactChild | React.ReactChild[];
};

const Theme = ({ children }: Props): JSX.Element => {
  const { state } = useContext(CryptoDataContext);
  return (
    <ThemeProvider theme={state.darkMode ? darkTheme : theme}>
      <MuiThemeProvider darkMode={state.darkMode}>{children}</MuiThemeProvider>
    </ThemeProvider>
  );
};

export default Theme;
