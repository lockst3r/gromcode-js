/* eslint-disable eqeqeq */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

let result = 0;

export const add = (number) => {
  result += number;
};

export const decrease = (number) => {
  result -= number;
};

export const reset = () => {
  result = 0;
};

export const getMemo = () => result;
