import React from 'react';
import { IconStyle } from './styled';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { IconButton } from '@mui/material';
import { scrollToTop } from '../../utils/scroll';

const ScrollToTopButton = () => (
  <IconButton
    aria-label="scroll to top"
    size="large"
    onClick={scrollToTop}
    sx={{ position: 'fixed', bottom: '2rem', right: '2rem' }}
  >
    <ArrowCircleUpIcon style={IconStyle} />
  </IconButton>
);

export default ScrollToTopButton;
