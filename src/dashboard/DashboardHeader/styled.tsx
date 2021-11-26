import styled from 'styled-components';

export const Header = styled.section`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.padding.small};
`;

export const DashboardSelectWidth = ['60%', '45%', '30%'];
