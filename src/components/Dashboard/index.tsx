import React, { useContext } from 'react';
import { CryptoData } from '../../config/types';
import { CryptoDataContext } from '../../config/CryptoDataProvider';
import {
  sortObject,
  objToArray,
  nFormatter,
} from '../../config/helperFunctions';

const Dashboard = (): JSX.Element => {
  const context = useContext(CryptoDataContext);
  const cryptoInfo = context as CryptoData;
  const currency = 'czk';

  console.log(nFormatter(6777270798355.02));

  const finalData = cryptoInfo ? objToArray(sortObject(cryptoInfo)) : null;

  return (
    <>
      {finalData !== null ? (
        <pre>
          {finalData.map((entry) => {
            return (
              <div key={entry[0]}>
                <h4>{entry[0]}</h4>
                <span>{currency}</span>
                <span>{entry[1][currency]} </span>
                <span>{entry[1][`${currency}_24h_change`]} </span>
                <span>{entry[1][`${currency}_24h_vol`]} </span>
                <span>{entry[1][`${currency}_market_cap`]} </span>
              </div>
            );
          })}
        </pre>
      ) : (
        <p>Loading entries</p>
      )}
    </>
  );
};

export default Dashboard;
