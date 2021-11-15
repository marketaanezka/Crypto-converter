import styled from 'styled-components';
import { defaultTheme, centerBlock } from '../../common/theme';
import { device } from '../../common/device';

export const ConverterWrapper = styled.section`
  margin: 0 auto;
  padding: ${defaultTheme.padding.medium};
  ${centerBlock}
  flex-direction: column;
  width: 500px;
  max-width: calc(100% - 60px);
  background-color: ${defaultTheme.color.white};
  box-shadow: ${defaultTheme.cardShadow};
  border-radius: ${defaultTheme.borderRadius};
  margin-bottom: ${defaultTheme.margin.medium};

  @media ${device.sm} {
    padding: ${defaultTheme.padding.large};
  }

  @media ${device.md} {
    flex-direction: row;
    height: 170px;
    min-width: 800px;
    width: 1200px;
  }
`;

export const ConvertSign = styled.div`
  height: 32px;
  display: table-cell;
  line-height: 27px;
  font-size: 32px;
  margin: 0.5rem 1.5rem;
`;
