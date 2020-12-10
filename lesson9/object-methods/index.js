/* eslint-disable eqeqeq */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

'use strict'



// input object
// output arr

// eslint-disable-next-line arrow-body-style
const getAdults = (obj) => {
  return obj.length == 0 ? obj : Object.entries(obj)
    .filter((el) => el[1] >= 18)
    .map((el) => el[0]);
};