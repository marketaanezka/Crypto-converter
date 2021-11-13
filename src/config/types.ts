export type Rate = { [key: string]: number };

export interface CurrencyObject {
  name: string;
  code: string;
}

export interface CryptoDataObject {
  [key: string]: Rate;
}

export type FormattedCryptoObject = {
  crypto: string;
  cad: number;
  cad_24h_change: number;
  cad_24h_vol: number;
  cad_market_cap: number;
  cny: number;
  cny_24h_change: number;
  cny_24h_vol: number;
  cny_market_cap: number;
  czk: number;
  czk_24h_change: number;
  czk_24h_vol: number;
  czk_market_cap: number;
  eur: number;
  eur_24h_change: number;
  eur_24h_vol: number;
  eur_market_cap: number;
  gbp: number;
  gbp_24h_change: number;
  gbp_24h_vol: number;
  gbp_market_cap: number;
  jpy: number;
  jpy_24h_change: number;
  jpy_24h_vol: number;
  jpy_market_cap: number;
  usd: number;
  usd_24h_change: number;
  usd_24h_vol: number;
  usd_market_cap: number;
};

export type CryptoDataArray = { [key: string]: string | number }[];
