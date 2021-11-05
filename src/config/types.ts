type Rate = { [key: string]: number };

export interface ExchangeRates {
  [key: string]: Rate;
}

export interface currencyObject {
  name: string;
  code: string;
}
