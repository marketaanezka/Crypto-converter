import styled from 'styled-components';
import { centerBlock } from '../../common/theme';

export const LogoWrapper = styled.div`
  ${centerBlock}
  svg path {
    fill: ${(props) => props.theme.color.layoutBg};
  }
`;
