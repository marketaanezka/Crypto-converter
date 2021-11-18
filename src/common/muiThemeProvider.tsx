import React from 'react';
import { ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material/styles';

type Props = {
  children: React.ReactChild | React.ReactChild[];
  darkMode: boolean;
};

const MuiThemeProvider = ({ children, darkMode }: Props): JSX.Element => {
  const theme = createTheme({
    palette: { mode: darkMode ? 'dark' : 'light' },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
