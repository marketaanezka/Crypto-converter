import React, { useContext, useState } from 'react';
import { ExchangeRates } from '../../config/types';
import { ExchangeRatesContext } from '../../config/ExchangeProvider';
import { fiatValues, cryptoValues } from '../../config/data';
import ConvertorRow from '../ConvertorRow';

const Convertor = (): JSX.Element => {
  const [to, setTo] = useState('bitcoin');
  const [from, setFrom] = useState('usd');
  const [inversed, setInversed] = useState(false);
  const [amount, setAmount] = useState(1);

  const context = useContext(ExchangeRatesContext);
  const exchangeRates = context as ExchangeRates;

  const handleFromInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = e.target.value.replaceAll(',', '');
    console.log(newAmount, typeof newAmount);
    setAmount(Number(newAmount === '' ? 0 : newAmount));
    setInversed(false);
  };

  const handleToInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const noPrefix = e.target.value.split(' ')[1];
    const validateAmount =
      noPrefix == undefined || noPrefix === '' ? '0' : noPrefix;
    const newAmount = validateAmount.replaceAll(',', '');

    console.log(newAmount, typeof newAmount);
    setAmount(
      Number(newAmount === '' || newAmount == undefined ? 0 : newAmount)
    );
    setInversed(true);
  };

  return (
    <>
      {exchangeRates !== null ? (
        <form>
          <ConvertorRow
            inputValue={inversed ? amount / exchangeRates[to][from] : amount}
            handleInputChange={handleFromInputChange}
            selectValue={to}
            selectOptions={cryptoValues}
            handleMuiSelectChange={(e) => {
              setTo(e.target.value);
            }}
          />
          <ConvertorRow
            inputValue={inversed ? amount : amount * exchangeRates[to][from]}
            prefix={from.toUpperCase()}
            handleInputChange={handleToInputChange}
            selectValue={from}
            selectOptions={fiatValues}
            handleMuiSelectChange={(e) => setFrom(e.target.value)}
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
