import styled from 'styled-components';
import { device } from '../../common/device';
import { defaultTheme, centerBlock } from '../../common/theme';

interface Props {
  up: boolean;
}
export const DisplayCard = styled.article`
  padding: ${defaultTheme.padding.medium};
  background-color: inherit;
  border-bottom: 1px solid ${defaultTheme.color.gray};
  width: 100%;

  @media ${device.sm} {
    padding: ${defaultTheme.padding.large};
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${defaultTheme.margin.medium}; ;
`;

export const CardHeaderLeft = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const CryptoSymbol = styled.h2`
  width: 65%;
`;

export const CryptoName = styled.p`
  width: 100%;
  text-align: start;
  /* margin-left: ${defaultTheme.margin.small}; */
  text-transform: capitalize;
`;

export const CardHeaderRight = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  flex-wrap: wrap;
`;
export const Price = styled.h2`
  width: 100%;
  text-align: end;
`;

export const ArrowUp = styled.div`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;

  border-bottom: 9px solid green;
  margin-right: 0.25rem;
`;
export const ArrowDown = styled.div`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;

  border-top: 9px solid #f00;

  margin-right: 0.25rem;
`;

export const ChangeValue = styled.span<Props>`
  color: ${(props) => (props.up ? 'green' : 'red')};
`;
export const Detail = styled.div`
  margin-bottom: ${defaultTheme.margin.small};
  @media ${device.sm} {
    display: flex;
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
`;
