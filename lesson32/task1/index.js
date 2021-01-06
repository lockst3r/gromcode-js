/* eslint-disable no-restricted-globals */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
const getValueWithDelay = (value, delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });

const getSum = (numbers) =>
  numbers
    .filter((value) => !isNaN(value))
    .reduce((acc, num) => acc + Number(num), 0);

export const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers)
    .then((numbers) => getSum(numbers))
    .catch(() => Promise.reject(new Error("Can't calculate")));
};
