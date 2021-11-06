import React, { ReactNode } from 'react';
import { CurrencyObject } from '../../config/types';
import { TextField, Select, SelectChangeEvent, MenuItem } from '@mui/material';
import NumberFormat from 'react-number-format';

interface Props {
  inputValue: number;
  prefix?: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectValue: string;
  selectOptions: CurrencyObject[];
  handleMuiSelectChange: (
    event: SelectChangeEvent<string>,
    child: ReactNode
  ) => void;
}

const ConvertorRow = ({
  inputValue,
  handleInputChange,
  selectValue,
  selectOptions,
  handleMuiSelectChange,
}: Props): JSX.Element => {
  return (
    <div>
      <NumberFormat
        value={inputValue}
        thousandSeparator={true}
        allowNegative={false}
        onChange={handleInputChange}
        customInput={TextField}
      />
      <Select
        name="currencyselect"
        id="currencyselect"
        value={selectValue}
        onChange={handleMuiSelectChange}
      >
        {selectOptions.map((option) => {
          return (
            <MenuItem key={option.name} value={option.code}>
              {option.name}
            </MenuItem>
          );
        })}
        {/* </select> */}
      </Select>
    </div>
  );
};

export default ConvertorRow;
