import { IconButton, Switch } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { LayoutWrapper, HeaderBar, IconStyle } from './styled';
import Logo from '../Logo';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

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

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    });
  };

  return (
    <LayoutWrapper>
      <HeaderBar>
        <Logo />
        {/* switch only static will control dark mode */}
        <Switch color="default" />
        {showButton && (
          // <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
          <IconButton
            aria-label="scroll to top"
            size="large"
            onClick={scrollToTop}
            sx={{ position: 'fixed', bottom: '2rem', right: '20rem' }}
          >
            <ArrowCircleUpIcon style={IconStyle} />
          </IconButton>
          // </div>
        )}
      </HeaderBar>
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
