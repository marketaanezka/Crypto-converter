import React from 'react';
import { CurrencyObject } from '../../config/types';
import NumberFormat, { NumberFormatValues } from 'react-number-format';

interface Props {
  inputValue: number;
  prefix?: string;
  handleInputChange: (values: NumberFormatValues) => void;
  selectValue: string;
  selectOptions: CurrencyObject[];
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ConvertorRow = ({
  inputValue,
  prefix,
  handleInputChange,
  selectValue,
  selectOptions,
  handleSelectChange,
}: Props): JSX.Element => {
  return (
    <div>
      <NumberFormat
        value={inputValue}
        thousandSeparator={true}
        allowNegative={false}
        onValueChange={handleInputChange}
        prefix={prefix ? prefix + ' ' : undefined}
      />
      <select
        name="currencyselect"
        id="currencyselect"
        value={selectValue}
        onChange={handleSelectChange}
      >
        {selectOptions.map((fiat) => {
          return (
            <option key={fiat.name} value={fiat.code}>
              {fiat.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ConvertorRow;
