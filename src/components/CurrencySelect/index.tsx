import React, { ReactNode } from 'react';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { CurrencyObject } from '../../config/types';
import { SelectOptionName } from './styled';
import Icon from '../Icon';

interface Props {
  selectValue: string;
  selectOptions: CurrencyObject[];
  onCurrencyChange: (
    event: SelectChangeEvent<string>,
    child: ReactNode
  ) => void;
}

const CurrencySelect = ({
  selectValue,
  onCurrencyChange,
  selectOptions,
}: Props): JSX.Element => {
  return (
    <Select
      sx={{
        width: ['40%', '40%', '50%'],
      }}
      name="currencyselect"
      id="currencyselect"
      value={selectValue}
      onChange={onCurrencyChange}
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
  );
};

export default CurrencySelect;
