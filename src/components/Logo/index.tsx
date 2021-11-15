import React from 'react';
import { ReactComponent as LogoSvg } from '../../assets/logo/mwlogo02.svg';
import { LogoWrapper } from './styled';

const Logo = (): JSX.Element => {
  return (
    <LogoWrapper darkMode={false}>
      <LogoSvg width={35} height={35} />
    </LogoWrapper>
  );
};

export default Logo;
