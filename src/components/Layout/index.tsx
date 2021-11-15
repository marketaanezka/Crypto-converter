import { Switch } from '@mui/material';
import React from 'react';
import { LayoutWrapper, HeaderBar } from './styled';
import Logo from '../Logo';

type Props = {
  children?: React.ReactChild | React.ReactChild[];
};

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <LayoutWrapper>
      <HeaderBar>
        <Logo />
        {/* switch only static will control dark mode */}
        <Switch color="default" />
      </HeaderBar>
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
