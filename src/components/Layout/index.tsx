import { Switch } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { LayoutWrapper, HeaderBar } from './styled';
import Logo from '../Logo';
import ScrollToTopButton from '../ScrollToTopButton';

type Props = {
  children?: React.ReactChild | React.ReactChild[];
};

const Layout = ({ children }: Props): JSX.Element => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <LayoutWrapper>
      <HeaderBar>
        <Logo />
        {/* switch only static will control dark mode */}
        <Switch color="default" />
        {showButton && <ScrollToTopButton />}
      </HeaderBar>
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
