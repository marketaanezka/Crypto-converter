import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme';

type Props = {
  children?: React.ReactChild | React.ReactChild[];
};

const Theme = ({ children }: Props): JSX.Element => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
);

export default Theme;
