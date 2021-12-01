import React, { useEffect, useState } from 'react';

import ScrollToTopButton from '../../components/ScrollToTopButton';
import { DashboardCurrency, FormattedCryptoObject } from '../../config/types';
import DashboardCard from '../DashboardCard';
import { DisplayGrid } from './styled';

interface Props {
  cryptoData: FormattedCryptoObject[];
  currency: DashboardCurrency;
}

const DashboardGrid = ({ cryptoData, currency }: Props): JSX.Element => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const showScrollButton = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', showScrollButton);
    const cleanup = () => {
      window.removeEventListener('scroll', showScrollButton);
    };
    return cleanup;
  }, []);

  return (
    <DisplayGrid>
      {cryptoData.map((cryptoItem) => (
        <DashboardCard
          key={cryptoItem.crypto}
          cryptoName={cryptoItem.crypto}
          cryptoPrice={cryptoItem[currency]}
          cryptoChange={cryptoItem[`${currency}_24h_change`]}
          cryptoVolume={cryptoItem[`${currency}_24h_vol`]}
          cryptoCap={cryptoItem[`${currency}_market_cap`]}
          currency={currency}
          lastUpdated={cryptoItem['last_updated_at']}
        />
      ))}
      {showButton && <ScrollToTopButton />}
    </DisplayGrid>
  );
};

export default DashboardGrid;
