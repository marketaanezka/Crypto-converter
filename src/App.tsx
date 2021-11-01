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
  // const [crypto, setCrypto] = useState('');
  // const [currency, setCurrency] = useState('');

  useEffect(() => {
    getExchangeRate('bitcoin,ethereum', 'czk,gbp,usd');
  }, []);

  return (
    <div className="App">
      <header>
        <p>Crypto converter</p>
      </header>
    </div>
  );
};

export default App;
