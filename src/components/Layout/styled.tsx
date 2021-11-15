import styled from 'styled-components';
import { defaultTheme } from '../../common/theme';

export const LayoutWrapper = styled.main`
  min-height: 100vh;
  background-color: ${defaultTheme.color.lightBg};
`;

export const HeaderBar = styled.header`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  background: ${defaultTheme.color.headerGray};
`;
