import React, { useEffect, useState } from 'react';

type Price = { [key: string]: number };

interface CurrencyPrice {
  [key: string]: Price;
}

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
  } catch (err) {
    console.error('rejected', err);
  }
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

  useEffect(() => {
    getExchangeRate(
      'bitcoin,ethereum,tether,cardano,solana,polkadot,ripple,usd-coin,chainlink,vechain',
      'czk,gbp,usd,eur,cad,cny,jpy'
    );
    console.log(exchangeRateList);
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
            <option value="gbp">gbp</option>
            <option value="usd">usd</option>
            <option value="eur">euro</option>
          </select>
          <br />
          <input type="number" disabled />
          <select
            name="crypto"
            id="crypto"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          >
            <option value="bitcoin">BTC</option>
            <option value="cardano">Cardano</option>
            <option value="chainlink">ChainLink</option>
          </select>
        </form>
        <h3>Exchange rate</h3>
        {exchangeRateList !== null && exchangeRateList !== undefined ? (
          <p>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'usd',
            }).format(exchangeRateList[to][from])}
          </p>
        ) : (
          <p>Loading...</p>
        )}
        <h3>Inverse exchange rate</h3>
        {exchangeRateList !== null && exchangeRateList !== undefined ? (
          <p>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'usd',
            }).format(1 / exchangeRateList[to][from])}
          </p>
        ) : (
          <p>Loading...</p>
        )}
      </header>
    </div>
  );
};

export default App;
