import styled from 'styled-components';
import { device } from '../../common/device';
import { theme } from '../../common/theme';

interface Props {
  up: boolean;
}
export const Card = styled.article`
  padding: ${(props) => props.theme.padding.medium};
  background-color: inherit;
  width: 100%;
  background-color: ${(props) => props.theme.color.cardBg};
  box-shadow: ${(props) => props.theme.cardShadow};
  border-radius: ${(props) => props.theme.borderRadius};
  @media ${device.sm} {
    padding: ${(props) => props.theme.padding.large};
  }
`;

export const CardHeader = styled.header`
  margin-bottom: ${(props) => props.theme.margin.large};
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
  color: ${(props) => props.theme.color.text};
  width: 65%;
  font-size: ${(props) => props.theme.fontSize.title};
`;

export const Price = styled.h3`
  color: ${(props) => props.theme.color.text};
  overflow: hidden;
`;

export const CardHeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 5px;
`;

export const CryptoName = styled.p`
  color: ${(props) => props.theme.color.text};
  flex-grow: 2;
  text-align: start;
  font-size: ${(props) => props.theme.fontSize.medium};
  text-transform: capitalize;
`;

export const ArrowUp = styled.div`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;

  border-bottom: 9px solid ${(props) => props.theme.color.green};
  margin-right: 0.25rem;
`;

export const ArrowDown = styled.div`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;

  border-top: 9px solid ${(props) => props.theme.color.red};

  margin-right: 0.25rem;
`;

export const ChangeLabel = styled.p`
  color: ${(props) => props.theme.color.label};
  font-size: ${(props) => props.theme.fontSize.small};
  margin-right: 0.5rem;
`;

export const ChangeValue = styled.span<Props>`
  color: ${(props) => (props.up ? theme.color.green : theme.color.red)};
`;
export const Detail = styled.div`
  margin-bottom: ${(props) => props.theme.margin.small};
  @media ${device.sm} {
    display: flex;
    align-items: baseline;
  }
`;

export const Label = styled.p`
  color: ${(props) => props.theme.color.label};
  font-size: ${(props) => props.theme.fontSize.small};
  margin-right: 0.5rem;
  text-transform: capitalize;
  width: 5.5rem;
`;

export const Amount = styled.p`
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.fontSize.standard};
`;
