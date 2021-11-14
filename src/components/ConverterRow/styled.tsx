import styled from 'styled-components';
import { device } from '../../common/device';
import { centerBlock } from '../../common/theme';
// import { TextField, Select, SelectChangeEvent, MenuItem } from '@mui/material';

export const RowWrapper = styled.div`
  ${centerBlock}
  width: 100%;

  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    display: flex;
    align-items: center;
  }

  @media ${device.md} {
    width: 80%;
  }
`;

export const SelectOptionName = styled.span`
  height: auto;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
