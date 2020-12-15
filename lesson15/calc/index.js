/* eslint-disable eqeqeq */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

export function createCalculator() {
  let result = 0;

  const add = (number) => {
    result += number;
  };

  const decrease = (number) => {
    result -= number;
  };

  const reset = () => {
    result = 0;
  };

  const getMemo = () => result;

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
}
