/* eslint-disable strict */
/* eslint-disable no-unused-vars */

'use strict'

// input arr
// output arr

export const reverseArray = (arr) =>{
  if(Array.isArray(arr)){
  const copy = [...arr];
  const result = copy.reverse();
  return result;
  }
  return null;
  
  }