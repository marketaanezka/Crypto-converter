export const URL_BASE = 'https://api.coingecko.com/api/v3/simple';

// export const const getExchangeRate = async (
//   crypto: string,
//   currency: string
// ): Promise<void> => {
//   try {
//     const response = await fetch(
//       `${URL_BASE}/price?ids=${crypto}&vs_currencies=${currency}`
//     );
//     const data = await response.json();
//     setRates(data);
//   } catch (err) {
//     console.error('rejected', err);
//   }
// };
