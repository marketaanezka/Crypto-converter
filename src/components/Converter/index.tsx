import React, { useContext, useState } from 'react';
import { ExchangeRates } from '../../config/types';
import { ExchangeRatesContext } from '../../config/ExchangeProvider';
import { fiatValues, cryptoValues } from '../../config/data';
import { ConverterWrapper, Equals } from './styled';
import { formatAmount } from '../../config/helperFunctions';
import ConverterRow from '../ConverterRow';

const Converter = (): JSX.Element => {
  const [fromCrypto, setFromCrypto] = useState('bitcoin');
  const [toFiat, setToFiat] = useState('usd');
  const [inversed, setInversed] = useState(false);
  const [amount, setAmount] = useState(1);

  const context = useContext(ExchangeRatesContext);
  const exchangeRates = context as ExchangeRates;

  const handleFromInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(formatAmount(e.target.value));
    setInversed(false);
  };

  const handleToInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(formatAmount(e.target.value));
    setInversed(true);
  };

  return (
    <ConverterWrapper>
      {exchangeRates !== null ? (
        <>
          <ConverterRow
            inputValue={
              inversed ? amount / exchangeRates[fromCrypto][toFiat] : amount
            }
            handleAmountChange={handleFromInputChange}
            selectValue={fromCrypto}
            selectOptions={cryptoValues}
            handleCurrencyChange={(e) => {
              setFromCrypto(e.target.value);
            }}
            currencyLabel={fromCrypto}
          />
          <Equals>=</Equals>
          <ConverterRow
            inputValue={
              inversed ? amount : amount * exchangeRates[fromCrypto][toFiat]
            }
            handleAmountChange={handleToInputChange}
            selectValue={toFiat}
            selectOptions={fiatValues}
            handleCurrencyChange={(e) => setToFiat(e.target.value)}
            currencyLabel={toFiat.toUpperCase()}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </ConverterWrapper>
  );
};

export default Converter;
