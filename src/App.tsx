import React, { useEffect, useState, useContext } from 'react';
import Convertor from './components/Convertor';

type Price = { [key: string]: number };

interface CurrencyPrice {
  [key: string]: Price;
}

const URL_BASE = 'https://api.coingecko.com/api/v3/simple';

const cryptoValues = [
  { name: 'Bitcoin', code: 'BTC' },
  { name: 'Ethereum', code: 'ETH' },
  { name: 'Tether', code: 'USDT' },
  { name: 'Cardano', code: 'ADA' },
  { name: 'Solana', code: 'SOL' },
  { name: 'Polkadot', code: 'DOT' },
  { name: 'Ripple', code: 'XRP' },
  { name: 'Usd-coin', code: 'USDC' },
  { name: 'Chainlink', code: 'LINK' },
  { name: 'Vechain', code: 'VET' },
];

const fiatValues = [
  { name: 'Czech Koruna', code: 'czk' },
  { name: 'Pound Sterling', code: 'gbp' },
  { name: 'US Dollar', code: 'usd' },
  { name: 'Euro', code: 'eur' },
  { name: 'Canadian Dollar', code: 'cad' },
  { name: 'Yuan Renminbi', code: 'cny' },
  { name: 'Yen', code: 'jpy' },
];

const cryptoNames = cryptoValues.map((item) => item.name);
const cryptoQuery = cryptoNames.join();

const fiatCodes = fiatValues.map((item) => item.code);
const fiatQuery = fiatCodes.join();

const App = (): JSX.Element => {
  const getExchangeRate = async (
    url: string,
    crypto: string,
    currency: string
  ): Promise<void> => {
    try {
      const response = await fetch(
        `${url}/price?ids=${crypto}&vs_currencies=${currency}`
      );
      const data = await response.json();
      // console.log(data);
      setExchangeRateList(data);
    } catch (err) {
      console.error('rejected', err);
    }
  };

  const [exchangeRateList, setExchangeRateList] =
    useState<CurrencyPrice | null>(null);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('bitcoin');
  const [inversed, setInversed] = useState(false);
  const [amount, setAmount] = useState<number>(1);

  let toAmount, fromAmount;
  if (!inversed && exchangeRateList !== null) {
    fromAmount = amount;
    toAmount = amount * exchangeRateList[to][from];
  } else if (exchangeRateList !== null) {
    fromAmount = amount / exchangeRateList[to][from];
    toAmount = amount;
  }

  const handleFromAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
    setInversed(false);
  };

  const handleToAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
    setInversed(true);
  };

  useEffect(() => {
    getExchangeRate(URL_BASE, cryptoQuery, fiatQuery);
    // console.log(exchangeRateList);
  }, []);

  return (
    <div className="App">
      <Convertor />
      {exchangeRateList !== null && exchangeRateList !== undefined ? (
        <form>
          <br />
          <input
            type="number"
            value={fromAmount}
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
            value={toAmount}
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
    </div>
  );
};

export default App;
