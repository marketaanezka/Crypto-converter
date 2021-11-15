import styled from 'styled-components';
import { device } from '../../common/device';
import { defaultTheme } from '../../common/theme';

interface Props {
  up: boolean;
}
export const Card = styled.article`
  padding: ${defaultTheme.padding.medium};
  background-color: inherit;
  border-bottom: 1px solid ${defaultTheme.color.gray};
  width: 100%;
  background-color: ${defaultTheme.color.white};
  box-shadow: ${defaultTheme.cardShadow};
  border-radius: ${defaultTheme.borderRadius};
  @media ${device.sm} {
    padding: ${defaultTheme.padding.large};
  }
`;

export const CardHeader = styled.header`
  margin-bottom: ${defaultTheme.margin.large};
`;

export const CardHeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CryptoTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const CryptoSymbol = styled.h3`
  width: 65%;
  font-size: ${defaultTheme.fontSize.title};
`;

export const Price = styled.h3`
  overflow: hidden;
`;

export const CardHeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 5px;
`;

export const CryptoName = styled.p`
  flex-grow: 2;
  text-align: start;
  font-size: ${defaultTheme.fontSize.medium};
  text-transform: capitalize;
`;

export const ArrowUp = styled.div`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;

  border-bottom: 9px solid ${defaultTheme.color.green};
  margin-right: 0.25rem;
`;

export const ArrowDown = styled.div`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;

  border-top: 9px solid ${defaultTheme.color.red};

  margin-right: 0.25rem;
`;

export const ChangeValue = styled.span<Props>`
  color: ${(props) =>
    props.up ? defaultTheme.color.green : defaultTheme.color.red};
`;
export const Detail = styled.div`
  margin-bottom: ${defaultTheme.margin.small};
  @media ${device.sm} {
    display: flex;
    align-items: baseline;
  }
`;

export const Label = styled.p`
  color: ${defaultTheme.color.darkGray};
  font-size: ${defaultTheme.fontSize.small};
  margin-right: 0.5rem;
  text-transform: capitalize;
`;

export const Amount = styled.p`
  color: ${defaultTheme.color.black};
  font-size: ${defaultTheme.fontSize.standard};
`;
