import React from 'react';
import { CryptoDataObject, FormattedCryptoObject } from '../../config/types';
import { formatAPIdata, formatNumber } from '../../config/helperFunctions';

const DashboardDisplay = (cryptoData: CryptoDataObject): JSX.Element => {
  const formattedCryptoData = formatAPIdata(
    cryptoData
  ) as FormattedCryptoObject[];
  const currency = 'usd';
  console.log('dashboard display data', formattedCryptoData);
  return (
    <div>
      Dashboard Display
      {formattedCryptoData.map((entry) => {
        return (
          <div key={entry.crypto}>
            <h4>{entry.crypto}</h4>
            <span>{entry[currency]} </span>
            <span>{formatNumber(entry[`${currency}_24h_change`])} </span>
            <span>{formatNumber(entry[`${currency}_24h_vol`])} </span>
            <span>{formatNumber(entry[`${currency}_market_cap`])} </span>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardDisplay;
