import styled from 'styled-components';
import { defaultTheme } from '../../common/theme';

export const LayoutWrapper = styled.main`
  min-height: 100vh;
  background-color: ${defaultTheme.color.lightBg};
  padding-bottom: ${defaultTheme.padding.large};
  position: relative;
`;

export const HeaderBar = styled.header`
  padding: 0.3rem 2rem;
  display: flex;
  justify-content: space-between;
  background: ${defaultTheme.color.headerBg};
`;
