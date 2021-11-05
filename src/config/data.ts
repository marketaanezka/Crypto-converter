export const URL_BASE = 'https://api.coingecko.com/api/v3/simple';

export const cryptoValues = [
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

export const fiatValues = [
  { name: 'Czech Koruna', code: 'czk' },
  { name: 'Pound Sterling', code: 'gbp' },
  { name: 'US Dollar', code: 'usd' },
  { name: 'Euro', code: 'eur' },
  { name: 'Canadian Dollar', code: 'cad' },
  { name: 'Yuan Renminbi', code: 'cny' },
  { name: 'Yen', code: 'jpy' },
];

const cryptoNames = cryptoValues.map((item) => item.name);
const fiatCodes = fiatValues.map((item) => item.code);

export const cryptoQuery = cryptoNames.join();
export const fiatQuery = fiatCodes.join();
