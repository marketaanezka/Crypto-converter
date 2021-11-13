import { CryptoDataObject, CryptoDataArray, Rate } from './types';

export const formatNumber = (number: number): string => {
  const str = number.toString();
  const before = str.split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const after = str.split('.')[1] ? `.${str.split('.')[1]}` : '';
  const decimal = after.substring(0, 8);
  const formattedNumber = before + decimal;
  return formattedNumber;
};

export const formatAmount = (numberAsString: string): number => {
  const formatString = numberAsString.replaceAll(',', '');
  const newAmount = Number(formatString === '' ? '0' : formatString);
  return newAmount;
};

export const nFormatter = (num: number): number | string => {
  if (num >= 1000000000000) {
    return (num / 1000000000000).toFixed(1).replace(/\.0$/, '') + 'trillion';
  }
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'bil';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'mil';
  }
  return num;
};

//https://stackoverflow.com/questions/9658690/is-there-a-way-to-sort-order-keys-in-javascript-objects
export const formatAPIdata = (data: CryptoDataObject): CryptoDataArray => {
  const sortedObj = Object.keys(data)
    .sort()
    .reduce(
      (acc, key) => ({
        ...acc,
        [key]: data[key],
      }),
      {}
    );
  const sortedArray = Object.entries(sortedObj);
  const formattedArray = sortedArray.map((item) => {
    return { crypto: item[0], ...(item[1] as Rate) };
  });
  return formattedArray;
};
