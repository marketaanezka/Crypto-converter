export interface CryptoDataState {
  exchangeRate: CryptoDataObject | null;
  cryptoDetails: CryptoDataArray | [];
  dashboardCurrency: DashboardCurrency;
  darkMode: boolean;
}

export const initialCryptoDataState: CryptoDataState = {
  exchangeRate: null,
  cryptoDetails: [],
  dashboardCurrency: 'czk',
  darkMode: false,
};

export type Rate = { [key: string]: number };

export interface CryptoDataObject {
  [key: string]: Rate;
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

export type CryptoDataArray = { [key: string]: string | number }[];
