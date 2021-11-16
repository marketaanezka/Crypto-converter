import { DashboardCurrency } from '../config/types';
import { Actions, ActionType, SetDashboardCurrency } from './actions';
import { CryptoDataState } from './state';

export const cryptoDataReducer = (
  state: CryptoDataState,
  action: Actions
): CryptoDataState => {
  switch (action.type) {
    case ActionType.SetDashboardCurrency:
      return { ...state, dashboardCurrency: action.payload };
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
