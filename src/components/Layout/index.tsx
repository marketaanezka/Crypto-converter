import React from 'react';

import Header from '../Header';
import { LayoutWrapper } from './styled';

type Props = {
  children?: React.ReactChild | React.ReactChild[];
};

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
