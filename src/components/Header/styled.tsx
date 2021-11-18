import styled from 'styled-components';

export const HeaderBar = styled.header`
  padding: 0.3rem 2rem;
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.color.contrastBg};
`;
