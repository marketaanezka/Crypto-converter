import { CryptoDataArray, CryptoDataObject, DashboardCurrency } from './state';

export enum ActionType {
  SetDashboardCurrency,
  SetCryptoDataObject,
  SetCryptoDetails,
  SetDarkMode,
}

export interface SetDashboardCurrency {
  type: ActionType.SetDashboardCurrency;
  payload: DashboardCurrency;
}

export interface SetCryptoDataObject {
  type: ActionType.SetCryptoDataObject;
  payload: CryptoDataObject;
}

export interface SetCryptoDetails {
  type: ActionType.SetCryptoDetails;
  payload: CryptoDataArray;
}

export interface SetDarkMode {
  type: ActionType.SetDarkMode;
  payload: boolean;
}

export type Actions =
  | SetDashboardCurrency
  | SetCryptoDataObject
  | SetCryptoDetails
  | SetDarkMode;

//https://github.com/hellomuthu23/react-context-example
