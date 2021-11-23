import React from 'react';

import { getSymbol } from '../../config/data';
import { formatNumber, intlNumberFormat } from '../../utils/format-number';
import { timeFromUnix } from '../../utils/time';
import Icon from '../Icon';
import {
  Amount,
  ArrowDown,
  ArrowUp,
  Card,
  CardHeader,
  CardHeaderBottom,
  CardHeaderTop,
  ChangeLabel,
  ChangeValue,
  CryptoName,
  CryptoSymbol,
  CryptoTitle,
  Detail,
  Label,
  Price,
} from './styled';

interface Props {
  cryptoName: string;
  cryptoPrice: number;
  cryptoChange: number;
  cryptoVolume: number;
  cryptoCap: number;
  currency: string;
  lastUpdated: number;
}

const DashboardCard = ({
  cryptoName,
  cryptoPrice,
  cryptoChange,
  cryptoVolume,
  cryptoCap,
  currency,
  lastUpdated,
}: Props): JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <CardHeaderTop>
          <CryptoTitle>
            <Icon code={cryptoName} size={25} />
            <CryptoSymbol>{getSymbol(cryptoName)}</CryptoSymbol>
          </CryptoTitle>
          <Price>{intlNumberFormat(cryptoPrice, currency)} </Price>
        </CardHeaderTop>
        <CardHeaderBottom>
          <CryptoName>{cryptoName}</CryptoName>
          <ChangeLabel>24h</ChangeLabel>
          {cryptoChange > 0 ? <ArrowUp /> : <ArrowDown />}
          <ChangeValue up={cryptoChange > 0}>
            {formatNumber(Math.abs(cryptoChange))}%
          </ChangeValue>
        </CardHeaderBottom>
      </CardHeader>
      <Detail>
        <Label>24h volume</Label>
        <Amount>{intlNumberFormat(cryptoVolume, currency)} </Amount>
      </Detail>
      <Detail>
        <Label>market cap</Label>
        <Amount>{intlNumberFormat(cryptoCap, currency)} </Amount>
      </Detail>
      <Detail>
        <Label>last updated</Label>
        <Amount>{timeFromUnix(lastUpdated)} </Amount>
      </Detail>
    </Card>
  );
};

export default DashboardCard;
