import React, { useContext, useState } from 'react';
import { formatForConversion } from '../../utils/format-number';
import ConverterRow from '../ConverterRow';
import { CryptoDataContext } from '../../state/context';
import { ConverterWrapper, ConvertSign, Title } from './styled';
import { cryptoValues, fiatValues, getSymbol } from '../../config/data';

const Converter = (): JSX.Element => {
  const [fromCrypto, setFromCrypto] = useState('bitcoin');
  const [toFiat, setToFiat] = useState('usd');
  const [inversed, setInversed] = useState(false);
  const [amount, setAmount] = useState(1);

  const { state } = useContext(CryptoDataContext);
  const exchangeRates = state.exchangeRate;

  const handleFromInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(formatForConversion(e.target.value));
    setInversed(false);
  };

  const handleToInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(formatForConversion(e.target.value));
    setInversed(true);
  };

  return (
    <>
      <Title>Converter</Title>
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
              currencyLabel={getSymbol(fromCrypto)}
            />
            <ConvertSign>=</ConvertSign>
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
    </>
  );
};

export default Converter;
