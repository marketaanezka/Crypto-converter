import React, { useEffect, useState } from 'react';

type Price = { [key: string]: number };

interface CurrencyPrice {
  [key: string]: Price;
}

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

const getExchangeRate = async (
  crypto: string,
  currency: string
): Promise<void> => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${currency}`
    );
    const data = await response.json();
    console.log('api called');
  } catch (err) {
    console.error('rejected', err);
  }
};

const formatNumber = (number: number): string => {
  const str = number.toString();
  const before = str.split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const after = str.split('.')[1] ? `.${str.split('.')[1]}` : '';
  const decimal = after.substring(0, 8);
  const formattedNumber = before + decimal;
  return formattedNumber;
};

const App = (): JSX.Element => {
  const getExchangeRate = async (
    crypto: string,
    currency: string
  ): Promise<void> => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${currency}`
      );
      const data = await response.json();
      console.log(data);
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

  useEffect(() => {
    getExchangeRate(
      'bitcoin,ethereum,tether,cardano,solana,polkadot,ripple,usd-coin,chainlink,vechain',
      'czk,gbp,usd,eur,cad,cny,jpy'
    );
    // console.log(exchangeRateList);
  }, [from, to]);

  return (
    <div className="App">
      <header>
        <form>
          <input type="number" />
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
          <br />
          <input type="number" />
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
        </form>
        <h3>Exchange rate</h3>
        {exchangeRateList !== null && exchangeRateList !== undefined ? (
          <p>{formatNumber(exchangeRateList[to][from])}</p>
        ) : (
          <p>Loading...</p>
        )}
        <h3>Inverse exchange rate</h3>
        {exchangeRateList !== null && exchangeRateList !== undefined ? (
          <p>{formatNumber(1 / exchangeRateList[to][from])}</p>
        ) : (
          <p>Loading...</p>
        )}
      </header>
    </div>
  );
};

export default App;
