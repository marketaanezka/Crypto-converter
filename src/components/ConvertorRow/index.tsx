import React from 'react';
import { currencyObject } from '../../config/types';

interface Props {
  inputValue: number;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectValue: string;
  selectOptions: currencyObject[];
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ConvertorRow = ({
  inputValue,
  handleInputChange,
  selectValue,
  selectOptions,
  handleSelectChange,
}: Props): JSX.Element => {
  return (
    <div>
      <input
        type="text"
        inputMode="numeric"
        value={inputValue}
        onChange={handleInputChange}
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
