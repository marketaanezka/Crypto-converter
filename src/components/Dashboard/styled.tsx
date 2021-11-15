import styled from 'styled-components';
import { device } from '../../common/device';

export const DashboardWrapper = styled.section`
  margin: 0 auto;
  max-width: calc(100% - 60px);
  width: 500px;
  @media ${device.sm} {
    width: calc(100% - 60px);
    max-width: 1000px;
  }
`;
