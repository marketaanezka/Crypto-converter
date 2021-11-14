import React from 'react';
import { CryptoDataObject, FormattedCryptoObject } from '../../config/types';
// import { getSymbol } from '../../config/data';
import { formatAPIdata } from '../../config/helperFunctions';
// import {
//   Amount,
//   CardHeader,
//   CardHeaderLeft,
//   CardHeaderRight,
//   ChangeValue,
//   CryptoName,
//   CryptoSymbol,
//   Detail,
//   DisplayCard,
//   Label,
//   Price,
//   ArrowDown,
//   ArrowUp,
// } from './styled';
// import Icon from '../Icon';
import DisplayCard from '../DisplayCard';

const DashboardDisplay = (cryptoData: CryptoDataObject): JSX.Element => {
  const formattedCryptoData = formatAPIdata(
    cryptoData
  ) as FormattedCryptoObject[];
  const currency = 'cny';
  console.log('dashboard display data', formattedCryptoData);

  // const numberFormat = (value: number) =>
  //   new Intl.NumberFormat('en-EN', {
  //     style: 'currency',
  //     currency: currency,
  //   }).format(value);

  return (
    <>
      {formattedCryptoData.map((entry) => {
        return (
          <DisplayCard
            key={entry.crypto}
            cryptoName={entry.crypto}
            cryptoPrice={entry[currency]}
            cryptoChange={entry[`${currency}_24h_change`]}
            cryptoVolume={entry[`${currency}_24h_vol`]}
            cryptoCap={entry[`${currency}_market_cap`]}
            currency={currency}
          />
          // <DisplayCard key={entry.crypto}>
          //   <CardHeader>
          //     <CardHeaderLeft>
          //       <Icon code={entry.crypto} />
          //       <CryptoSymbol>{getSymbol(entry.crypto)}</CryptoSymbol>
          //       <CryptoName>{entry.crypto}</CryptoName>
          //     </CardHeaderLeft>
          //     <CardHeaderRight>
          //       <Price>{numberFormat(entry[currency])} </Price>

          //       <Label>24h</Label>
          //       {entry[`${currency}_24h_change`] > 0 ? (
          //         <ArrowUp />
          //       ) : (
          //         <ArrowDown />
          //       )}
          //       <ChangeValue up={entry[`${currency}_24h_change`] > 0}>
          //         {formatNumber(entry[`${currency}_24h_change`])}%
          //       </ChangeValue>
          //     </CardHeaderRight>
          //   </CardHeader>
          //   <Detail>
          //     <Label>24h volume</Label>
          //     <Amount>{numberFormat(entry[`${currency}_24h_vol`])} </Amount>
          //   </Detail>
          //   <Detail>
          //     <Label>market cap</Label>
          //     <Amount>{numberFormat(entry[`${currency}_market_cap`])} </Amount>
          //   </Detail>
          // </DisplayCard>
        );
      })}
    </>
  );
};

export default DashboardDisplay;
