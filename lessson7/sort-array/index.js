/* eslint-disable strict */
/* eslint-disable no-unused-vars */

'use strict'

// input arr
// output arr

const sortDesc = (arr) => {
  const copy = [...arr];
  const result = copy.sort((a,b) => (b-a));
  return result;
  }