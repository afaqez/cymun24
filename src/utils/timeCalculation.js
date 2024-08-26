let currentTime = new Date().getTime();
let endTime = localStorage.getItem("endTime");

if (!endTime) {
  endTime = new Date(currentTime + 5 * 60 * 1000).getTime(); // Set for 5 minutes
  localStorage.setItem("endTime", endTime);
}

export const timeCalculation = () => {
  const totalRemaining = endTime - currentTime;

  currentTime += 1000;

  if (totalRemaining <= 0) {
    return false;
  }

  const minutes = Math.floor((totalRemaining / (1000 * 60)) % 60);
  const seconds = Math.floor((totalRemaining / 1000) % 60);

  return [minutes, seconds];
};
