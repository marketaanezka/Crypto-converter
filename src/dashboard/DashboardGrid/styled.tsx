import styled from 'styled-components';

export const DisplayGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(min(22rem, 100%), 1fr));
  justify-items: center;
`;
