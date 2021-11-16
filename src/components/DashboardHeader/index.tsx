import React, { ReactNode, useContext } from 'react';
import { Header } from './styled';
import CurrencySelect from '../CurrencySelect';
import { fiatValues } from '../../config/data';
import { SelectChangeEvent } from '@mui/material';
import { CryptoDataContextReducer } from '../../state/context';

interface Props {
  dashboardCurrency: string;
  onChangeDashboardCurrency: (
    event: SelectChangeEvent<string>,
    child: ReactNode
  ) => void;
}

const DashboardHeader = ({
  dashboardCurrency,
  onChangeDashboardCurrency,
}: Props): JSX.Element => {
  const { state } = useContext(CryptoDataContextReducer);
  return (
    <Header>
      testing header, select only static!
      <h4>{state.dashboardCurrency}</h4>
      <CurrencySelect
        selectValue={dashboardCurrency}
        onCurrencyChange={onChangeDashboardCurrency}
        selectOptions={fiatValues}
      />
    </Header>
  );
};

export default DashboardHeader;
