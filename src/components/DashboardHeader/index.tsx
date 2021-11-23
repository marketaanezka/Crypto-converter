import React, { useContext } from 'react';

import { SelectChangeEvent } from '@mui/material';

import { fiatValues } from '../../config/data';
import { DashboardCurrency } from '../../config/types';
import { CryptoDataContext } from '../../state/context';
import { setDashboardCurrency } from '../../state/reducer';
import CurrencySelect from '../CurrencySelect';
import ToggleViewButtons from '../ToggleViewButtons';
import { DashboardSelectWidth, Header } from './styled';

interface Props {
  handleChangeView: React.Dispatch<React.SetStateAction<string>>;
  dashboardView: string;
}

const DashboardHeader = ({
  handleChangeView,
  dashboardView,
}: Props): JSX.Element => {
  const { state, dispatch } = useContext(CryptoDataContext);
  const handleDashboardCurrencyChanged = (e: SelectChangeEvent<string>) => {
    const newCurrency = e.target.value as DashboardCurrency;
    dispatch(setDashboardCurrency(newCurrency));
  };

  return (
    <Header>
      <ToggleViewButtons
        dashboardView={dashboardView}
        handleChangeView={handleChangeView}
      />
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
