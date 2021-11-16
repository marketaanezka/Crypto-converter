import React from 'react';
import {
  CryptoDataObject,
  // DashboardCurrency,
  FormattedCryptoObject,
} from '../../config/types';
import { formatAPIdata } from '../../utils/format-data';
import DashboardCard from '../DashboardCard';
import { DisplayGrid } from './styled';

const DashboardDisplay = (
  cryptoData: CryptoDataObject
  // dashboardCurrency: DashboardCurrency
): JSX.Element => {
  const formattedCryptoData = formatAPIdata(
    cryptoData
  ) as FormattedCryptoObject[];
  console.log(formattedCryptoData);
  // const currency = dashboardCurrency as DashboardCurrency;

  // now static need to be a select
  const currency = 'chf';

  return (
    <DisplayGrid>
      {formattedCryptoData.map((cryptoItem) => (
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
