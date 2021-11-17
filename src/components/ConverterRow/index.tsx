import React, { ReactNode } from 'react';
import { CurrencyObject } from '../../config/types';
import { TextField, SelectChangeEvent } from '@mui/material';
import { RowWrapper, CurrencySelectWidth } from './styled';
import NumberFormat from 'react-number-format';
import CurrencySelect from '../CurrencySelect';

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
        decimalScale={7}
        onChange={handleAmountChange}
        customInput={TextField}
        type="tel"
        label={currencyLabel}
        sx={{ width: ['60%', '60%', '50%'] }}
      />
      <CurrencySelect
        selectValue={selectValue}
        selectOptions={selectOptions}
        onCurrencyChange={handleCurrencyChange}
        width={CurrencySelectWidth}
      />
    </RowWrapper>
  );
};

export default ConverterRow;
