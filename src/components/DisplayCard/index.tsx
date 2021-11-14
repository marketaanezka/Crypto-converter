import React from 'react';
import {
  Label,
  Card,
  CardHeader,
  CardHeaderLeft,
  CryptoSymbol,
  CryptoName,
  CardHeaderRight,
  Price,
  ArrowUp,
  ArrowDown,
  ChangeValue,
  Detail,
  Amount,
} from './styled';
import Icon from '../Icon';
import { getSymbol } from '../../config/data';
import { formatNumber } from '../../config/helperFunctions';

interface Props {
  cryptoName: string;
  cryptoPrice: number;
  cryptoChange: number;
  cryptoVolume: number;
  cryptoCap: number;
  currency: string;
}

const DisplayCard = ({
  cryptoName,
  cryptoPrice,
  cryptoChange,
  cryptoVolume,
  cryptoCap,
  currency,
}: Props) => {
  const numberFormat = (value: number) =>
    new Intl.NumberFormat('en-EN', {
      style: 'currency',
      currency: currency,
    }).format(value);
  return (
    <Card key={cryptoName}>
      <CardHeader>
        <CardHeaderLeft>
          <Icon code={cryptoName} />
          <CryptoSymbol>{getSymbol(cryptoName)}</CryptoSymbol>
          <CryptoName>{cryptoName}</CryptoName>
        </CardHeaderLeft>
        <CardHeaderRight>
          <Price>{numberFormat(cryptoPrice)} </Price>

          <Label>24h</Label>
          {cryptoChange > 0 ? <ArrowUp /> : <ArrowDown />}
          <ChangeValue up={cryptoChange > 0}>
            {formatNumber(cryptoChange)}%
          </ChangeValue>
        </CardHeaderRight>
      </CardHeader>
      <Detail>
        <Label>24h volume</Label>
        <Amount>{numberFormat(cryptoVolume)} </Amount>
      </Detail>
      <Detail>
        <Label>market cap</Label>
        <Amount>{numberFormat(cryptoCap)} </Amount>
      </Detail>
    </Card>
  );
};

export default DisplayCard;
