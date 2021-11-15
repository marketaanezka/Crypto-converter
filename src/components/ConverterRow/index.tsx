import React, { ReactNode } from 'react';
import { CurrencyObject } from '../../config/types';
import { TextField, Select, SelectChangeEvent, MenuItem } from '@mui/material';
import { RowWrapper, SelectOptionName } from './styled';
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
        inputMode="numeric"
        label={currencyLabel}
        sx={{ width: ['60%', '60%', '50%'] }}
      />
      <Select
        sx={{
          width: ['40%', '40%', '50%'],
        }}
        name="currencyselect"
        id="currencyselect"
        value={selectValue}
        onChange={handleCurrencyChange}
      >
        {selectOptions.map((option) => {
          return (
            <MenuItem
              key={option.name}
              value={option.code}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <Icon code={option.code} size={20} />
              <SelectOptionName>{option.name}</SelectOptionName>
            </MenuItem>
          );
        })}
      </Select>
    </RowWrapper>
  );
};

export default ConverterRow;
