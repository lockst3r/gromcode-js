// get different
// convert time
// who big or small


export const getDiff = (startDate, endDate) => {

  let diffTime = new Date(startDate) - new Date(endDate);

  if (startDate < endDate)
      diffTime = new Date(endDate) - new Date(startDate);

  const day = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const hour = Math.floor((diffTime / 1000 / 60 / 60) % 24);
  const min = Math.floor((diffTime / 1000 / 60) % 60);
  const sec = Math.floor((diffTime / 1000) % 60);

  return `${day}d ${hour}h ${min}m ${sec}s`;
};

