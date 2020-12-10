/* eslint-disable strict */
/* eslint-disable no-unused-vars */

'use strict'

// input arr
// output arr

const  flatArray = (arr) =>{
  const result = arr.reduce((acc, el)=>acc.concat(el), []);
  return result;
  }