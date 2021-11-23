import React, { useContext } from 'react';
import { DashboardSelectWidth, Header } from './styled';
import CurrencySelect from '../CurrencySelect';
import { fiatValues } from '../../config/data';
import {
  SelectChangeEvent,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { CryptoDataContext } from '../../state/context';
import { DashboardCurrency } from '../../config/types';
import { setDashboardCurrency } from '../../state/reducer';
import AppsIcon from '@mui/icons-material/Apps';
import TableRowsIcon from '@mui/icons-material/TableRows';

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

  const onViewChange = (
    event: React.MouseEvent<HTMLElement>,
    newView: React.MouseEvent
  ): void => {
    handleChangeView(newView as unknown as string);
  };

  return (
    <Header>
      <ToggleButtonGroup
        value={dashboardView}
        exclusive
        onChange={onViewChange}
        aria-label="dashboard view"
      >
        <ToggleButton value="grid" aria-label="grid cards">
          <AppsIcon />
        </ToggleButton>
        <ToggleButton value="list" aria-label="list table">
          <TableRowsIcon />
        </ToggleButton>
      </ToggleButtonGroup>
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
