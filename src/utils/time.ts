const twoDigit = (num: number): string => {
  return num.toString().padStart(2, '0');
};

export const timeFromUnix = (unixTime: number): string => {
  const date = new Date(unixTime * 1000);
  const hours = date.getHours();
  const minutes = twoDigit(date.getMinutes());
  const seconds = twoDigit(date.getSeconds());
  return `
    ${hours}:${minutes}:${seconds}
    `;
};
