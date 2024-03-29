import styled from 'styled-components';
import { device } from '../../common/device';

export const DashboardWrapper = styled.section`
  margin: 0 auto;
  max-width: calc(100% - 60px);
  width: 500px;
  @media ${device.sm} {
    width: calc(100% - 60px);
    max-width: 1200px;
  }
`;

export const Title = styled.h2`
  margin: 2rem auto 0;
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: 500;
  text-align: center;
`;
