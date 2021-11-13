export type Rate = { [key: string]: number };

export interface CurrencyObject {
  name: string;
  code: string;
}

export interface CryptoDataObject {
  [key: string]: Rate;
}

export type CryptoDataArray = { [key: string]: number | string }[];
