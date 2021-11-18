import styled from 'styled-components';

export const LayoutWrapper = styled.main`
  min-height: 100vh;
  background-color: ${(props) => props.theme.color.layoutBg};
  padding-bottom: ${(props) => props.theme.padding.large};
  position: relative;
`;

export const HeaderBar = styled.header`
  padding: 0.3rem 2rem;
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.color.headerBg};
`;
