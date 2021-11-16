export interface CryptoDataState {
  exchangeRate: CryptoDataObject | null;
  cryptoDetails: FormattedCryptoObject[] | [];
  dashboardCurrency: DashboardCurrency;
}

export const initialCryptoDataState: CryptoDataState = {
  exchangeRate: null,
  cryptoDetails: [],
  dashboardCurrency: 'usd',
};

export type Rate = { [key: string]: number };

export interface CryptoDataObject {
  [key: string]: Rate;
}

//used for data queries
export interface CurrencyObject {
  name: string;
  code: string;
}

export type DashboardCurrency =
  | 'aud'
  | 'cad'
  | 'czk'
  | 'eur'
  | 'krw'
  | 'gbp'
  | 'rub'
  | 'chf'
  | 'usd'
  | 'cny'
  | 'jpy';

export type FormattedCryptoObject = {
  aud: number;
  aud_24h_change: number;
  aud_24h_vol: number;
  aud_market_cap: number;
  cad: number;
  cad_24h_change: number;
  cad_24h_vol: number;
  cad_market_cap: number;
  chf: number;
  chf_24h_change: number;
  chf_24h_vol: number;
  chf_market_cap: number;
  cny: number;
  cny_24h_change: number;
  cny_24h_vol: number;
  cny_market_cap: number;
  crypto: string;
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
  krw: number;
  krw_24h_change: number;
  krw_24h_vol: number;
  krw_market_cap: number;
  rub: number;
  rub_24h_change: number;
  rub_24h_vol: number;
  rub_market_cap: number;
  usd: number;
  usd_24h_change: number;
  usd_24h_vol: number;
  usd_market_cap: number;
};

export type CryptoDataArray = { [key: string]: string | number }[];
