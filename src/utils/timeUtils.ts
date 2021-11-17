export const getMilisecondsFromTablePosition = (n: number) => {
  const day = 1000 * 60 * 60 * 24;
  const cellToDaysRatio = 30 / 12;
  return n * day * cellToDaysRatio;
};
