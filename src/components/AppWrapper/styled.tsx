import styled from 'styled-components';
import { defaultTheme } from '../../common/theme';

export const AppWrapper = styled.main`
  min-height: 100vh;
  background-color: ${(props) => props.theme.color.lightBg};
  padding-top: ${defaultTheme.padding.large};
`;
