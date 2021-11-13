import React, { useContext } from 'react';
import { CryptoDataObject } from '../../config/types';
import { CryptoDataContext } from '../../config/CryptoDataProvider';
import { formatAPIdata } from '../../config/helperFunctions';

const Dashboard = (): JSX.Element => {
  const context = useContext(CryptoDataContext);
  const cryptoInfo = context as CryptoDataObject;
  const currency = 'jpy';

  console.log('context received to dashboard', cryptoInfo);

  const newArrayfromObject = cryptoInfo ? formatAPIdata(cryptoInfo) : null;
  console.log(newArrayfromObject);

  return (
    <>
      {newArrayfromObject !== null ? (
        <pre>
          {newArrayfromObject.map((entry) => {
            return (
              <div key={entry.crypto}>
                <h4>{entry.crypto}</h4>
                <span>{currency}</span>
                <span>{entry[currency]} </span>
                <span>{entry[`${currency}_24h_change`]} </span>
                <span>{entry[`${currency}_24h_vol`]} </span>
                <span>{entry[`${currency}_market_cap`]} </span>
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
