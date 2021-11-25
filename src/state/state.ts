import { loadMode } from '../utils/local-storage';
import { userPrefersDark } from '../utils/user-mode-preference';

export interface CryptoDataState {
  exchangeRate: CryptoDataObject | null;
  cryptoDetails: CryptoDataArray | [];
  dashboardCurrency: DashboardCurrency;
  darkMode: boolean;
  error: string | null;
}

export const initialCryptoDataState: CryptoDataState = {
  exchangeRate: null,
  cryptoDetails: [],
  dashboardCurrency: 'czk',
  darkMode: loadMode() === 'dark' || userPrefersDark ? true : false,
  error: null,
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
