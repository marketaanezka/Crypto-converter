import React, { ChangeEvent, useContext } from 'react';

import MaterialUISwitch from '../../components/CustomSwitch';
import Logo from '../../components/Logo';
import { CryptoDataContext } from '../../state/context';
import { setDarkMode } from '../../state/reducer';
import { saveMode } from '../../utils/local-storage';
import { HeaderBar } from './styled';

const Header = (): JSX.Element => {
  const { state, dispatch } = useContext(CryptoDataContext);

  const toggleTheme = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setDarkMode(event.target.checked));
    saveMode(event.target.checked);
  };
  return (
    <HeaderBar>
      <Logo />
      <MaterialUISwitch checked={state.darkMode} onChange={toggleTheme} />
    </HeaderBar>
  );
};

export default Header;
