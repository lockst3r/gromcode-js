/* eslint-disable radix */
/* eslint-disable eqeqeq */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

"use strict";

// input number
// output arr

const numberyy = -55.66;

const multiRound = (num) => {
const arr = [];
  arr.push(Math.floor(num * 100) / 100);
  arr.push(Math.round(num * 100) / 100);
  arr.push(Math.ceil(num * 100) / 100);
  arr.push(Math.trunc(num * 100) / 100);
  arr.push(+num.toFixed(2));
  return arr;
};


console.log(multiRound(numberyy));
