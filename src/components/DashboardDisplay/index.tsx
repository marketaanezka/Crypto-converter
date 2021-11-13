import React from 'react';
import { CryptoDataObject, FormattedCryptoObject } from '../../config/types';
import { formatAPIdata, formatNumber } from '../../config/helperFunctions';
import {
  CardHeader,
  CardHeaderLeft,
  CardHeaderRight,
  ChangeValue,
  CryptoName,
  DisplayCard,
  Label,
  Price,
} from './styled';

const DashboardDisplay = (cryptoData: CryptoDataObject): JSX.Element => {
  const formattedCryptoData = formatAPIdata(
    cryptoData
  ) as FormattedCryptoObject[];
  const currency = 'usd';
  console.log('dashboard display data', formattedCryptoData);
  return (
    <>
      Dashboard Display
      {formattedCryptoData.map((entry) => {
        return (
          <DisplayCard key={entry.crypto}>
            <CardHeader>
              <CardHeaderLeft>
                <CryptoName>{entry.crypto}</CryptoName>
              </CardHeaderLeft>
              <CardHeaderRight>
                <Price>{formatNumber(entry[currency])} </Price>
                <Label>24H change</Label>
                <ChangeValue up={entry[`${currency}_24h_change`] > 0}>
                  {formatNumber(entry[`${currency}_24h_change`])}
                </ChangeValue>
              </CardHeaderRight>
            </CardHeader>
            <Label>24H volume</Label>
            <span>{formatNumber(entry[`${currency}_24h_vol`])} </span>
            <Label>market cap</Label>
            <span>{formatNumber(entry[`${currency}_market_cap`])} </span>
          </DisplayCard>
        );
      })}
    </>
  );
};

export default DashboardDisplay;
