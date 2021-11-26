import styled from 'styled-components';

import { device } from '../../common/device';
import { centerBlock } from '../../common/theme';

export const Screen = styled.section`
  width: 100%;
  height: calc(100vh - 45px);
  ${centerBlock}
`;

export const ErrorWrapper = styled.article`
  min-height: 60%;
  max-height: 80%;
  width: 1000px;
  padding: ${(props) => props.theme.padding.large};
  max-width: 80%;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.cardShadow};
  background-color: ${(props) => props.theme.color.cardBg};
  ${centerBlock}
  flex-direction: column;

  @media ${device.md} {
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`
  display: none;
  @media ${device.md} {
    ${centerBlock}
    padding: 2rem;
  }
  @media ${device.xl} {
    width: 40%;
  }
`;

export const ErrorImage = styled.img`
  width: 80%;
  height: 100%;
`;

export const ErrorText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorMessage = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xl};
  color: ${(props) => props.theme.color.text};
  text-align: center;
  margin-bottom: ${(props) => props.theme.margin.large};
`;

export const ErrorStatus = styled.p`
  font-size: ${(props) => props.theme.fontSize.large};
  color: ${(props) => props.theme.color.text};
  text-align: center;
  margin-bottom: ${(props) => props.theme.margin.large};
`;
