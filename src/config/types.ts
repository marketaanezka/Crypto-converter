type Rate = { [key: string]: number };

export interface ExchangeRates {
  [key: string]: Rate;
}

export interface CurrencyObject {
  name: string;
  code: string;
}
