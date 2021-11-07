import React, { ReactNode } from 'react';
import { CurrencyObject } from '../../config/types';
import { TextField, Select, SelectChangeEvent, MenuItem } from '@mui/material';
import NumberFormat from 'react-number-format';

interface Props {
  inputValue: number;
  handleAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectValue: string;
  selectOptions: CurrencyObject[];
  handleCurrencyChange: (
    event: SelectChangeEvent<string>,
    child: ReactNode
  ) => void;
  currencyLabel: string;
}

const ConverterRow = ({
  inputValue,
  handleAmountChange,
  selectValue,
  selectOptions,
  handleCurrencyChange,
  currencyLabel,
}: Props): JSX.Element => {
  return (
    <div style={{ padding: '20px' }}>
      <NumberFormat
        value={inputValue}
        thousandSeparator={true}
        allowNegative={false}
        allowLeadingZeros={false}
        onChange={handleAmountChange}
        customInput={TextField}
        label={currencyLabel}
      />
      <Select
        name="currencyselect"
        id="currencyselect"
        value={selectValue}
        onChange={handleCurrencyChange}
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

export default ConverterRow;
