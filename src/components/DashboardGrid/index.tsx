import React, { useContext, useEffect, useState } from 'react';

import { FormattedCryptoObject } from '../../config/types';
import { CryptoDataContext } from '../../state/context';
import DashboardCard from '../DashboardCard';
import ScrollToTopButton from '../ScrollToTopButton';
import { DisplayGrid } from './styled';

const DashboardGrid = (): JSX.Element => {
  const [showButton, setShowButton] = useState(false);
  const { state } = useContext(CryptoDataContext);
  const newData = state.cryptoDetails as FormattedCryptoObject[];
  const currency = state.dashboardCurrency;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

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
          lastUpdated={cryptoItem['last_updated_at']}
        />
      ))}
      {showButton && <ScrollToTopButton />}
    </DisplayGrid>
  );
};

export default DashboardGrid;
