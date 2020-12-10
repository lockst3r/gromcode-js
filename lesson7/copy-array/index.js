/* eslint-disable strict */
/* eslint-disable no-unused-vars */

'use strict'

// input arr
// output arr

const cloneArr = (arr) =>{
  if(Array.isArray(arr)){
  const copy = [...arr];
  return copy;
  }
  return null;
  
  }