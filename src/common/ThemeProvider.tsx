import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { CryptoDataContext } from '../state/context';
import { theme } from './theme';

type Props = {
  children?: React.ReactChild | React.ReactChild[];
};

const Theme = ({ children }: Props): JSX.Element => {
  const { state } = useContext(CryptoDataContext);
  console.log('theme provider', state);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
