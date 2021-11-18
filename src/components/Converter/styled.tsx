import styled from 'styled-components';
import { centerBlock } from '../../common/theme';
import { device } from '../../common/device';

export const ConverterWrapper = styled.section`
  margin: 0 auto;
  padding: ${(props) => props.theme.padding.medium};
  ${centerBlock}
  flex-direction: column;
  width: 500px;
  max-width: calc(100% - 60px);
  background-color: ${(props) => props.theme.color.cardBg};
  box-shadow: ${(props) => props.theme.cardShadow};
  border-radius: ${(props) => props.theme.borderRadius};
  margin-bottom: ${(props) => props.theme.margin.medium};

  @media ${device.sm} {
    padding: ${(props) => props.theme.padding.large};
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
  color: ${(props) => props.theme.color.text};
`;

export const Title = styled.h2`
  margin: 1.5rem auto;
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: 500;
  text-align: center;
`;
