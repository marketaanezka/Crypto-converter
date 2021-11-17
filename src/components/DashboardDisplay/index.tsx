import React, { useContext } from 'react';
import { FormattedCryptoObject } from '../../config/types';
import { CryptoDataContext } from '../../state/context';
import DashboardCard from '../DashboardCard';
import { DisplayGrid } from './styled';

const DashboardDisplay = (): JSX.Element => {
  const { state } = useContext(CryptoDataContext);
  const newData = state.cryptoDetails as FormattedCryptoObject[];
  // now static need to be a select
  const currency = state.dashboardCurrency;

  return (
    <DisplayGrid>
      {newData.map((cryptoItem) => (
        <DashboardCard
          key={cryptoItem.crypto}
          cryptoName={cryptoItem.crypto}
          cryptoPrice={cryptoItem[currency]}
          cryptoChange={cryptoItem[`${currency}_24h_change`]}
          cryptoVolume={cryptoItem[`${currency}_24h_vol`]}
          cryptoCap={cryptoItem[`${currency}_market_cap`]}
          currency={currency}
        />
      ))}
    </DisplayGrid>
  );
};

export default DashboardDisplay;
