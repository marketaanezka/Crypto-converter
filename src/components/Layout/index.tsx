import { Switch } from '@mui/material';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { LayoutWrapper, HeaderBar } from './styled';
import Logo from '../Logo';
import ScrollToTopButton from '../ScrollToTopButton';
import { CryptoDataContext } from '../../state/context';
import { setDarkMode } from '../../state/reducer';

type Props = {
  children?: React.ReactChild | React.ReactChild[];
};

const Layout = ({ children }: Props): JSX.Element => {
  const [showButton, setShowButton] = useState(false);
  const { state, dispatch } = useContext(CryptoDataContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const toggleTheme = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setDarkMode(!event.target.checked));
  };

  return (
    <LayoutWrapper>
      <HeaderBar>
        <Logo />
        <Switch
          color="default"
          checked={!state.darkMode}
          onChange={toggleTheme}
        />
        {showButton && <ScrollToTopButton />}
      </HeaderBar>
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
