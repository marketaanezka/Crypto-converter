export const timeFromUnix = (unixTime: number): string => {
  const date = new Date(unixTime * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const twoDigitMinutes = minutes.toString().padStart(2, '0');
  const twoDigitSeconds = seconds.toString().padStart(2, '0');
  const timeZone = date.getTimezoneOffset();
  return `
    ${hours}:${twoDigitMinutes}:${twoDigitSeconds} UTC${timeZone}
    `;
};
