export const URL_BASE = 'https://api.coingecko.com/api/v3/simple';

export const cryptoValues = [
  { name: 'Bitcoin', code: 'bitcoin' },
  { name: 'Cardano', code: 'cardano' },
  { name: 'Ethereum', code: 'ethereum' },
  { name: 'Chainlink', code: 'chainlink' },
  { name: 'Polkadot', code: 'polkadot' },
  { name: 'Ripple', code: 'ripple' },
  { name: 'Solana', code: 'solana' },
  { name: 'Tether', code: 'tether' },
  { name: 'Usd-coin', code: 'usd-coin' },
  { name: 'Vechain', code: 'vechain' },
];

export const fiatValues = [
  { name: 'Czech Koruna', code: 'czk' },
  { name: 'Euro', code: 'eur' },
  { name: 'Canadian Dollar', code: 'cad' },
  { name: 'Pound Sterling', code: 'gbp' },
  { name: 'US Dollar', code: 'usd' },
  { name: 'Yuan Renminbi', code: 'cny' },
  { name: 'Yen', code: 'jpy' },
];

const cryptoNames = cryptoValues.map((item) => item.name);
const fiatCodes = fiatValues.map((item) => item.code);

export const cryptoQuery = cryptoNames.join();
export const fiatQuery = fiatCodes.join();
