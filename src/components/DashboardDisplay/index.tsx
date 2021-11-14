import React from 'react';
import { CryptoDataObject, FormattedCryptoObject } from '../../config/types';
import { formatAPIdata } from '../../utils/format-data';
import DisplayCard from '../DisplayCard';

const DashboardDisplay = (cryptoData: CryptoDataObject): JSX.Element => {
  const formattedCryptoData = formatAPIdata(
    cryptoData
  ) as FormattedCryptoObject[];
  // now static need to be a select
  const currency = 'usd';

  return (
    <>
      {formattedCryptoData.map((cryptoItem) => (
        <DisplayCard
          key={cryptoItem.crypto}
          cryptoName={cryptoItem.crypto}
          cryptoPrice={cryptoItem[currency]}
          cryptoChange={cryptoItem[`${currency}_24h_change`]}
          cryptoVolume={cryptoItem[`${currency}_24h_vol`]}
          cryptoCap={cryptoItem[`${currency}_market_cap`]}
          currency={currency}
        />
      ))}
    </>
  );
};

export default DashboardDisplay;
