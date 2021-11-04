import React, { useContext } from 'react';
import { ExchangeRatesContext } from '../../config/ExchangeProvider';

// interface Props {

// }

const Convertor = () => {
  const value = useContext(ExchangeRatesContext);
  console.log('convertor context', value);
  return <p>Convertor component</p>;
};

export default Convertor;
