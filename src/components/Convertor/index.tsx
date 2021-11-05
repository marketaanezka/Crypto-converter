import React, { useContext, useState } from 'react';
import { ExchangeRates } from '../../config/types';
import { ExchangeRatesContext } from '../../config/ExchangeProvider';
import { fiatValues, cryptoValues } from '../../config/data';

// interface Props {

// }

const Convertor = (): JSX.Element => {
  const [to, setTo] = useState('bitcoin');
  const [from, setFrom] = useState('usd');
  const [inversed, setInversed] = useState(false);
  const [amount, setAmount] = useState(1);

  const context = useContext(ExchangeRatesContext);
  const exchangeRates = context as ExchangeRates;
  console.log(exchangeRates);

  const handleFromAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
    setInversed(false);
  };

  const handleToAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
    setInversed(true);
  };

  return (
    <>
      {exchangeRates !== null ? (
        <form>
          <br />
          <input
            type="number"
            value={inversed ? amount / exchangeRates[to][from] : amount}
            // value={amount}
            onChange={handleFromAmountChange}
          />
          <select
            name="crypto"
            id="crypto"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          >
            {cryptoValues.map((crypto) => {
              return (
                <option key={crypto.name} value={crypto.name.toLowerCase()}>
                  {crypto.name}, {crypto.code}
                </option>
              );
            })}
          </select>
          <br />
          <input
            type="number"
            value={inversed ? amount : amount * exchangeRates[to][from]}
            // value={amount}
            onChange={handleToAmountChange}
          />
          <select
            name="currencyselect"
            id="currencyselect"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          >
            {fiatValues.map((fiat) => {
              return (
                <option key={fiat.name} value={fiat.code}>
                  {fiat.name}
                </option>
              );
            })}
          </select>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Convertor;
