import styled from 'styled-components';
import { device } from '../../common/device';
import { centerBlock } from '../../common/theme';

export const RowWrapper = styled.div`
  ${centerBlock}
  width: 100%;

  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    display: flex;
    align-items: center;
  }

  @media ${device.md} {
    width: 80%;

    .css-11saer6-MuiFormControl-root-MuiTextField-root {
      width: 50%;
    }

    .css-tvtc6y-MuiInputBase-root-MuiOutlinedInput-root {
      width: 50%;
    }
  }
`;
