import React, { ReactNode } from 'react';
import { Header } from './styled';
import CurrencySelect from '../CurrencySelect';
import { fiatValues } from '../../config/data';
import { SelectChangeEvent } from '@mui/material';

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
  return (
    <Header>
      testing header, select only static!
      <CurrencySelect
        selectValue={dashboardCurrency}
        onCurrencyChange={onChangeDashboardCurrency}
        selectOptions={fiatValues}
      />
    </Header>
  );
};

export default DashboardHeader;
