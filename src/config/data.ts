export const URL_BASE = 'https://api.coingecko.com/api/v3/simple';

export const cryptoValues = [
  { name: 'Bitcoin', code: 'bitcoin' },
  { name: 'Ethereum', code: 'ethereum' },
  { name: 'Tether', code: 'tether' },
  { name: 'Cardano', code: 'cardano' },
  { name: 'Solana', code: 'solana' },
  { name: 'Polkadot', code: 'polkadot' },
  { name: 'Ripple', code: 'ripple' },
  { name: 'Usd-coin', code: 'usd-coin' },
  { name: 'Chainlink', code: 'chainlink' },
  { name: 'Vechain', code: 'vechain' },
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
