import React, { ReactNode } from 'react';
import { CurrencyObject } from '../../config/types';
import { TextField, Select, SelectChangeEvent, MenuItem } from '@mui/material';
import { RowWrapper } from './styled';
import Icon from '../Icon';
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
    <RowWrapper>
      <NumberFormat
        value={inputValue}
        thousandSeparator={true}
        allowNegative={false}
        allowLeadingZeros={false}
        onChange={handleAmountChange}
        customInput={TextField}
        label={currencyLabel}
        sx={{ width: '60%' }}
      />
      <Icon code={'cad'} />
      <Select
        sx={{ width: '40%' }}
        name="currencyselect"
        id="currencyselect"
        value={selectValue}
        onChange={handleCurrencyChange}
      >
        {selectOptions.map((option) => {
          console.log(option);
          return (
            <MenuItem key={option.name} value={option.code}>
              {/* <Icon code={option.code} /> */}
              {option.name}
            </MenuItem>
          );
        })}
      </Select>
    </RowWrapper>
  );
};

export default ConverterRow;
