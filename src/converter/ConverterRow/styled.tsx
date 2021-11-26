import styled from 'styled-components';

import { device } from '../../common/device';
import { centerBlock } from '../../common/theme';

export const RowWrapper = styled.div`
  ${centerBlock}
  width: 100%;

  @media ${device.md} {
    width: 80%;
  }
`;

export const SelectOptionName = styled.span`
  height: auto;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const CurrencySelectWidth = ['50%', '40%', '50%'];
