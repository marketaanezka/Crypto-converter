import React from 'react';
import {
  Label,
  Card,
  CardHeader,
  CryptoSymbol,
  CryptoName,
  Price,
  ArrowUp,
  ArrowDown,
  ChangeValue,
  Detail,
  Amount,
  CardHeaderTop,
  CardHeaderBottom,
  CryptoTitle,
} from './styled';
import Icon from '../Icon';
import { getSymbol } from '../../config/data';
import { formatNumber, intlNumberFormat } from '../../utils/format-number';

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
          <Label>24h</Label>
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
    </Card>
  );
};

export default DisplayCard;
