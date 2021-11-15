import styled from 'styled-components';
// import { device } from '../../common/device';

export const DisplayGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(min(25rem, 100%), 1fr));
  justify-items: center;
`;
