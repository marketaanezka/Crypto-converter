import { CryptoDataArray, CryptoDataObject, Rate } from '../config/types';

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
