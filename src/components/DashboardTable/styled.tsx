import styled from 'styled-components';
import { device } from '../../common/device';

export const TableWrapper = styled.section`
  padding: ${(props) => props.theme.padding.medium};
  background-color: inherit;
  width: 100%;
  background-color: ${(props) => props.theme.color.cardBg};
  box-shadow: ${(props) => props.theme.cardShadow};
  border-radius: ${(props) => props.theme.borderRadius};
  @media ${device.sm} {
    padding: ${(props) => props.theme.padding.large};
  }

  margin-bottom: 2rem;
  .crypto-name-cell {
    text-transform: capitalize;
  }

  .change-cell-up {
    color: ${(props) => props.theme.color.green};
  }
  .change-cell-down {
    color: ${(props) => props.theme.color.red};
  }
`;
