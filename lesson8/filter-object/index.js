/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

'use strict'



export const getAdults = (obj) => {
  // eslint-disable-next-line prefer-const
  let obj2 = {};
  for (let value in obj) {
    if (obj[value] >= 18) {
      obj2[value] = obj[value];
    }
  }
  return obj2;
};