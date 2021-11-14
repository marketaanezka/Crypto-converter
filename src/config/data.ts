export const URL_BASE = 'https://api.coingecko.com/api/v3/simple';

export const cryptoValues = [
  { name: 'Bitcoin', code: 'bitcoin' },
  { name: 'Cardano', code: 'cardano' },
  { name: 'Dogecoin', code: 'dogecoin' },
  { name: 'Ethereum', code: 'ethereum' },
  { name: 'Chainlink', code: 'chainlink' },
  { name: 'Litecoin', code: 'litecoin' },
  { name: 'Polkadot', code: 'polkadot' },
  { name: 'Ripple', code: 'ripple' },
  { name: 'Shiba-inu', code: 'shiba-inu' },
  { name: 'Solana', code: 'solana' },
  { name: 'Sushi', code: 'sushi' },
  { name: 'Tether', code: 'tether' },
  { name: 'Usd-coin', code: 'usd-coin' },
  { name: 'Vechain', code: 'vechain' },
];

export const fiatValues = [
  { name: 'Australian Dollar', code: 'aud' },
  { name: 'Canadian Dollar', code: 'cad' },
  { name: 'Czech Koruna', code: 'czk' },
  { name: 'Euro', code: 'eur' },
  { name: 'Korean won', code: 'krw' },
  { name: 'Pound Sterling', code: 'gbp' },
  { name: 'Russian Rubl', code: 'rub' },
  { name: 'Swiss franc', code: 'chf' },
  { name: 'US Dollar', code: 'usd' },
  { name: 'Yen', code: 'jpy' },
  { name: 'Yuan Renminbi', code: 'cny' },
];

const cryptoSymbols: { [key: string]: string } = {
  bitcoin: 'BTC',
  cardano: 'ADA',
  ethereum: 'ETH',
  chainlink: 'LINK',
  polkadot: 'DOT',
  ripple: 'XRP',
  solana: 'SOL',
  tether: 'USDT',
  usdcoin: 'USDC',
  vechain: 'VET',
  dogecoin: 'DOGE',
  shibainu: 'SHIB',
  litecoin: 'LTC',
  sushi: 'SUSHI',
};

export const getSymbol = (cryptoName: string): string => {
  const formatCrypto = cryptoName.replace('-', '');
  return cryptoSymbols[formatCrypto];
};

const cryptoNames = cryptoValues.map((item) => item.name);
export const cryptoQuery = cryptoNames.join();

const fiatCodes = fiatValues.map((item) => item.code);
export const fiatQuery = fiatCodes.join();
