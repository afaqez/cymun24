let currentDayTime = new Date().getTime();
const endDay = new Date();
endDay.setDate(endDay.getDate() + 9);

export const timeCalculation = () => {
  const totalRemaining = endDay.getTime() - currentDayTime;

  currentDayTime += 1000;

  if (totalRemaining <= 0) {
    return false;
  }

  const days = Math.floor(totalRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalRemaining / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalRemaining / (1000 * 60)) % 60);
  const seconds = Math.floor((totalRemaining / 1000) % 60);

  return [days, hours, minutes, seconds];
};
