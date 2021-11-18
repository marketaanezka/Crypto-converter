import { DashboardCurrency } from '../config/types';
import {
  Actions,
  ActionType,
  SetCryptoDataObject,
  SetCryptoDetails,
  SetDashboardCurrency,
  SetDarkMode,
} from './actions';
import { CryptoDataArray, CryptoDataObject, CryptoDataState } from './state';

export const cryptoDataReducer = (
  state: CryptoDataState,
  action: Actions
): CryptoDataState => {
  switch (action.type) {
    case ActionType.SetDashboardCurrency:
      return { ...state, dashboardCurrency: action.payload };
    case ActionType.SetCryptoDataObject:
      return { ...state, exchangeRate: action.payload };
    case ActionType.SetCryptoDetails:
      return { ...state, cryptoDetails: action.payload };
    case ActionType.SetDarkMode:
      return { ...state, darkMode: action.payload };
    default:
      return state;
  }
};

export const setDashboardCurrency = (
  value: DashboardCurrency
): SetDashboardCurrency => ({
  type: ActionType.SetDashboardCurrency,
  payload: value,
});

export const setCryptoDataObject = (
  value: CryptoDataObject
): SetCryptoDataObject => ({
  type: ActionType.SetCryptoDataObject,
  payload: value,
});

export const setCryptoDetails = (value: CryptoDataArray): SetCryptoDetails => ({
  type: ActionType.SetCryptoDetails,
  payload: value,
});

export const setDarkMode = (value: boolean): SetDarkMode => ({
  type: ActionType.SetDarkMode,
  payload: value,
});
