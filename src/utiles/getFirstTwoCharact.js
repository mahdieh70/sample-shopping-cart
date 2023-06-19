export const getFirstTwoCharact = (string) => {
  const words = string.split(" ");
  const shortenedString = words.slice(0, 4).join(' ');
  return shortenedString;
};
