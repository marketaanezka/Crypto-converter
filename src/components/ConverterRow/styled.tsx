import styled from 'styled-components';
import { device } from '../../common/device';

export const RowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media ${device.md} {
    width: 80%;
  }

  .css-tvtc6y-MuiInputBase-root-MuiOutlinedInput-root {
    @media ${device.md} {
      width: 50%;
    }
  }
`;
