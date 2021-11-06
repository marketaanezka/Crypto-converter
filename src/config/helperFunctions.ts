export const formatNumber = (number: number): string => {
  const str = number.toString();
  const before = str.split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const after = str.split('.')[1] ? `.${str.split('.')[1]}` : '';
  const decimal = after.substring(0, 8);
  const formattedNumber = before + decimal;
  return formattedNumber;
};

// const handleFromAmountChange = (values: NumberFormatValues) => {
//   const { floatValue } = values;
//   setAmount(floatValue ? floatValue : 0);
//   setInversed(false);
// };

// const handleToAmountChange = (values: NumberFormatValues) => {
//   const { floatValue } = values;
//   setAmount(floatValue ? floatValue : 0);
//   setInversed(true);
// };
