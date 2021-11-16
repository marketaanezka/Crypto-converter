import { DashboardCurrency } from './state';

export enum ActionType {
  SetDashboardCurrency,
}

export interface SetDashboardCurrency {
  type: ActionType.SetDashboardCurrency;
  payload: DashboardCurrency;
}

export type Actions = SetDashboardCurrency;
