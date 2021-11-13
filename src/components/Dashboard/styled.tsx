import styled from 'styled-components';
import { device } from '../../common/device';
import { defaultTheme, centerBlock } from '../../common/theme';

export const DashboardWrapper = styled.section`
  margin: 0 auto;
  padding: ${defaultTheme.padding.medium};
  ${centerBlock}
  flex-direction: column;
  width: 500px;
  max-width: calc(100% - 60px);
  background-color: ${defaultTheme.color.white};
  box-shadow: ${defaultTheme.cardShadow};
  border-radius: ${defaultTheme.borderRadius};

  @media ${device.sm} {
    padding: ${defaultTheme.padding.large};
  }

  @media ${device.md} {
    flex-direction: row;
    height: 170px;
    width: 800px;
    max-width: 800px;
  }
`;
