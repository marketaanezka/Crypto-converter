import React, { useContext } from 'react';

import { SelectChangeEvent } from '@mui/material';

import CurrencySelect from '../../components/CurrencySelect';
import ToggleViewButtons from '../../components/ToggleViewButtons';
import { fiatValues } from '../../config/data';
import { DashboardCurrency } from '../../config/types';
import { CryptoDataContext } from '../../state/context';
import { setDashboardCurrency } from '../../state/reducer';
import { DashboardItemWidth, Header } from './styled';

interface Props {
  handleChangeView: React.Dispatch<React.SetStateAction<string>>;
  dashboardView: string;
  searchData: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
        width={DashboardItemWidth}
      />
      <CurrencySelect
        selectValue={state.dashboardCurrency}
        onCurrencyChange={handleDashboardCurrencyChanged}
        selectOptions={fiatValues}
        width={DashboardItemWidth}
      />
    </Header>
  );
};

export default DashboardHeader;
