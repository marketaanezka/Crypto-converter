type Rate = { [key: string]: number };

export interface ExchangeRates {
  [key: string]: Rate;
}

export interface CurrencyObject {
  name: string;
  code: string;
}

export interface InputValueObject {
  floatValue: number;
  formattedValue: string;
  value: string;
}
