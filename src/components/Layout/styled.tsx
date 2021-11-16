import styled from 'styled-components';
import { device } from '../../common/device';
import { defaultTheme } from '../../common/theme';

export const LayoutWrapper = styled.main`
  min-height: 100vh;
  background-color: ${defaultTheme.color.lightBg};
`;

export const HeaderBar = styled.header`
  padding: 0.3rem 2rem;
  display: flex;
  justify-content: space-between;
  background: ${defaultTheme.color.headerBg};

  /* @media ${device.sm} {
    padding: 0.3rem 1rem;
  } */
`;
