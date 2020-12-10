/* eslint-disable strict */
/* eslint-disable no-unused-vars */

'use strict'

// input arr
// output arr

function getSpecialNumbers(arr) {
  const result = arr.filter(num => num % 3 === 0);
  return result;
}