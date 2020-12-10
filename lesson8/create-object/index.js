/* eslint-disable strict */
/* eslint-disable no-unused-vars */

'use strict'

// input arr
// output arr

const transformToObject = (arr) => {
  const obj = {};
  if (arr.length === 0) {
    return obj;
  } 
    arr.forEach((element) => {
      obj[element] = element;
    });
    return obj;
  
};