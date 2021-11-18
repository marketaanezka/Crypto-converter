import React from 'react';
import { ArrowUp } from './styled';
import { IconButton } from '@mui/material';
import { scrollToTop } from '../../utils/scroll';

const ScrollToTopButton = (): JSX.Element => (
  <IconButton
    aria-label="scroll to top"
    size="large"
    onClick={scrollToTop}
    sx={{ position: 'fixed', bottom: '2rem', right: '2rem' }}
  >
    {/* <ArrowCircleUpIcon style={IconStyle} /> */}
    <ArrowUp />
  </IconButton>
);

export default ScrollToTopButton;
