/* eslint-disable strict */
/* eslint-disable no-unused-vars */

'use strict'

// input arr
// output arr

const squareArray = (numbers) =>{
  if(Array.isArray(numbers)=== true){
  const result = numbers.map(number => number*number);
  return result;
  }
  return null;
  
  }