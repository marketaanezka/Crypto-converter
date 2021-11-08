import styled from 'styled-components';
import { defaultTheme } from '../../common/theme';
import { device } from '../../common/device';

export const ConverterWrapper = styled.section`
  margin: 0 auto;
  padding: ${defaultTheme.padding.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  max-width: calc(100% - 60px);
  background-color: ${(props) => props.theme.color.white};
  box-shadow: ${defaultTheme.cardShadow};
  border-radius: ${defaultTheme.borderRadius};

  @media ${device.sm} {
    padding: ${defaultTheme.padding.large};
  }

  @media ${device.md} {
    flex-direction: row;
    width: 800px;
    max-width: 800px;
  }
`;

export const Equals = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  display: table-cell;
  line-height: 27px;
  font-size: 32px;
  margin: 0.5rem 1.5rem;
`;
