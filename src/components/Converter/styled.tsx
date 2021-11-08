import styled from 'styled-components';

export const ConverterWrapper = styled.section`
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  max-width: calc(100% - 60px);
  background-color: #fff;
  box-shadow: rgba(35, 55, 80, 0.3) 0px 6px 12px;
  border-radius: 4px;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 700px;
    max-width: 700px;
  }
`;

export const Equals = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  display: table-cell;
  line-height: 27px;
  font-size: 32px;
  margin: 0 16px;
`;
