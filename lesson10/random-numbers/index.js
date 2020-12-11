/* eslint-disable eqeqeq */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

'use strict'


// input number number number
// output arr

function getRandomNumbers(length, start, end) {
  const noNumbersBetween = end - start < 1 && Math.ceil(end) === Math.ceil(start);
  if (noNumbersBetween) {
    return null;
  }
  return Array(length)
    .fill()
    .map(() =>
      start > 0 && end > 0
        ? Math.floor(Math.random() * (end - start) + start)
        : Math.ceil(Math.random() * (end - start) + start)
    );
}
