import React, { useEffect, useState } from 'react';
import { LayoutWrapper } from './styled';
import ScrollToTopButton from '../ScrollToTopButton';
import Header from '../Header';

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
      <Header />
      {showButton && <ScrollToTopButton />}
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
