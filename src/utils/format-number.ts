export const formatForConversion = (numberAsString: string): number => {
  const formatString = numberAsString.replaceAll(',', '');
  const newAmount = Number(formatString === '' ? '0' : formatString);
  return newAmount;
};

export const formatNumber = (number: number): string => {
  const str = number.toString();
  const before = str.split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const after = str.split('.')[1] ? `.${str.split('.')[1]}` : '';
  const decimal = after.substring(0, 8);
  const formattedNumber = before + decimal;
  return formattedNumber;
};
export const intlNumberFormat = (value: number, currency: string): string =>
  new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: currency,
  }).format(value);
