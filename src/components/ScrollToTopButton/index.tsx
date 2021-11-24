import React from 'react';

import { IconButton } from '@mui/material';

import { scrollToTop } from '../../utils/scroll';
import { ArrowUp } from './styled';

const ScrollToTopButton = (): JSX.Element => (
  <IconButton
    aria-label="scroll to top"
    size="large"
    onClick={scrollToTop}
    sx={{ position: 'fixed', bottom: '2rem', right: '2rem' }}
  >
    <ArrowUp />
  </IconButton>
);

export default ScrollToTopButton;
