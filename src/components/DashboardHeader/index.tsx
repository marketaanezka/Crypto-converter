import React, { useContext } from 'react';
import { DashboardSelectWidth, Header } from './styled';
import CurrencySelect from '../CurrencySelect';
import { fiatValues } from '../../config/data';
import { SelectChangeEvent } from '@mui/material';
import { CryptoDataContext } from '../../state/context';
import { DashboardCurrency } from '../../config/types';
import { setDashboardCurrency } from '../../state/reducer';

const DashboardHeader = (): JSX.Element => {
  const { state, dispatch } = useContext(CryptoDataContext);
  const handleDashboardCurrencyChanged = (e: SelectChangeEvent<string>) => {
    const newCurrency = e.target.value as DashboardCurrency;
    dispatch(setDashboardCurrency(newCurrency));
  };
  return (
    <Header>
      <CurrencySelect
        selectValue={state.dashboardCurrency}
        onCurrencyChange={handleDashboardCurrencyChanged}
        selectOptions={fiatValues}
        width={DashboardSelectWidth}
      />
    </Header>
  );
};

export default DashboardHeader;
