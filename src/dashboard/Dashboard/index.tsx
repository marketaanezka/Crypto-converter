import React, { useContext, useState } from 'react';

import SearchBar from '../../components/SearchBar';
import { getSymbol } from '../../config/data';
import { FormattedCryptoObject } from '../../config/types';
import { CryptoDataContext } from '../../state/context';
import DashboardGrid from '../DashboardGrid';
import DashboardHeader from '../DashboardHeader';
import DashboardTable from '../DashboardTable';
import { DashboardWrapper, Title } from './styled';

const Dashboard = (): JSX.Element => {
  const [dashboardView, setDashboardView] = useState('grid');
  const [filteredData, setFilteredData] = useState<FormattedCryptoObject[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const { state } = useContext(CryptoDataContext);
  const currentData = state.cryptoDetails as FormattedCryptoObject[];
  const currency = state.dashboardCurrency;

  const handleSearchData = (e: React.ChangeEvent<HTMLInputElement>): void => {

    const searchValue = e.target.value.trim().toLowerCase();
    if (searchValue === null) {
      return;
    } else {
      setIsSearching(true);
      const filteredData = currentData.filter(
        (item) =>
          item.crypto.includes(searchValue) ||
          getSymbol(item.crypto).toLowerCase().includes(searchValue)
      );
      setFilteredData(filteredData);
    }
  };

  return (
    <DashboardWrapper>
      <Title>Current crypto data</Title>
      <DashboardHeader
        handleChangeView={setDashboardView}
        dashboardView={dashboardView}
        searchData={handleSearchData}
      />
      <SearchBar onSearchData={handleSearchData} />
      {dashboardView === 'grid' && (
        <DashboardGrid
          cryptoData={isSearching ? filteredData : currentData}
          currency={currency}
        />
      )}
      {dashboardView === 'list' && (
        <DashboardTable
          cryptoData={isSearching ? filteredData : currentData}
          currency={currency}
        />
      )}
    </DashboardWrapper>
  );
};

export default Dashboard;
