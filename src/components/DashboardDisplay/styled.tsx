import styled from 'styled-components';
import { defaultTheme, centerBlock } from '../../common/theme';

interface Props {
  up: boolean;
}
export const DisplayCard = styled.article`
  padding: ${defaultTheme.padding.medium};
  background-color: inherit;
  border-bottom: 1px solid ${defaultTheme.color.gray};
  width: 100%;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardHeaderLeft = styled.div`
  width: 40%;
  ${centerBlock}
  flex-wrap: wrap;
`;
export const CryptoName = styled.h4``;

export const CardHeaderRight = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const Price = styled.h4`
  width: 100%;
`;
export const ChangeValue = styled.span<Props>`
  color: ${(props) => (props.up ? 'green' : 'red')};
`;

export const Label = styled.p`
  color: ${defaultTheme.color.darkGray};
  font-size: ${defaultTheme.fontSize.small};
`;

export const Amount = styled.p`
  color: ${defaultTheme.color.black};
`;
