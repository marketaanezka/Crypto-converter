export type Rate = { [key: string]: number };

export interface CryptoData {
  [key: string]: Rate;
}

export interface CurrencyObject {
  name: string;
  code: string;
}
