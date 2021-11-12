export type Rate = { [key: string]: number };

export interface CryptoDataObject {
  [key: string]: Rate;
}

// should be improved
export interface FormattedCryptoObject {
  [key: string]: number | string;
}

export interface CurrencyObject {
  name: string;
  code: string;
}
