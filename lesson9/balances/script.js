const getTotalRevenue = (dayTransactions) => {
  const result = dayTransactions.reduce(function (acc, el) {
    return acc + el.amount;
  }, 0);

  return result;
};
