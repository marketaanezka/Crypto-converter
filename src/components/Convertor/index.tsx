import React, { useContext, useState } from 'react';
import { ExchangeRates } from '../../config/types';
import { ExchangeRatesContext } from '../../config/ExchangeProvider';
import { fiatValues, cryptoValues } from '../../config/data';
import ConvertorRow from '../ConvertorRow';
import { NumberFormatValues } from 'react-number-format';

const Convertor = (): JSX.Element => {
  const [to, setTo] = useState('bitcoin');
  const [from, setFrom] = useState('usd');
  const [inversed, setInversed] = useState(false);
  const [amount, setAmount] = useState(1);

  const context = useContext(ExchangeRatesContext);
  const exchangeRates = context as ExchangeRates;

  const handleFromAmountChange = (values: NumberFormatValues) => {
    const { floatValue } = values;
    if (floatValue) {
      setAmount(floatValue);
    }
    setInversed(false);
  };

  const handleToAmountChange = (values: NumberFormatValues) => {
    const { floatValue } = values;
    if (floatValue) {
      setAmount(floatValue);
    }
    setInversed(true);
  };

  // const handleToAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const newAmount = Number(e.target.value.replaceAll(',', ''));
  //   setAmount(newAmount);
  //   setInversed(true);
  // };

  return (
    <>
      {exchangeRates !== null ? (
        <form>
          <ConvertorRow
            inputValue={inversed ? amount / exchangeRates[to][from] : amount}
            handleInputChange={handleFromAmountChange} // need to be handleFROM
            selectValue={to}
            selectOptions={cryptoValues}
            handleSelectChange={(e) => setTo(e.target.value)}
          />
          <ConvertorRow
            inputValue={inversed ? amount : amount * exchangeRates[to][from]}
            handleInputChange={handleToAmountChange}
            selectValue={from}
            selectOptions={fiatValues}
            handleSelectChange={(e) => setFrom(e.target.value)}
          />
          <br />
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Convertor;
