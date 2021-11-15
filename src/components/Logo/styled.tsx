import styled from 'styled-components';
import { centerBlock, defaultTheme } from '../../common/theme';

interface Props {
  darkMode: boolean;
}

export const LogoWrapper = styled.div<Props>`
  ${centerBlock}
  svg path {
    fill: ${(props) =>
      props.darkMode ? defaultTheme.color.white : defaultTheme.color.black};
  }
`;
