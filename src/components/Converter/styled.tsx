import React from 'react';
import styled from 'styled-components';

export const ConverterWrapper = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
