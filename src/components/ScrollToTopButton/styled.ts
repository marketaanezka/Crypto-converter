import styled from 'styled-components';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

export const ArrowUp = styled(ArrowCircleUpIcon)`
  color: ${(props) => props.theme.color.headerBg};
  transform: scale(1.75);
`;
