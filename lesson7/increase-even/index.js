/* eslint-disable strict */
/* eslint-disable no-unused-vars */

'use strict'

// input arr
// output arr

const increaseEvenEl = (arr, delta) => {
  if(Array.isArray(arr) === true){
  const odd = arr.filter(num => num % 2 === 0);
  const result = odd.map(num => num+delta);
  return result;
  }
  return null;
  
  }