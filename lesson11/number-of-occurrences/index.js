/* eslint-disable eqeqeq */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

'use strict'


// input string string
// number

const countOccurrences = (str, findStr) => {

  if (findStr === '')
      return null;

  let sum = 0;
  let pos = 0;

  while (true) {
      // eslint-disable-next-line prefer-const
      let foundPos = str.indexOf(findStr, pos);

      if (foundPos == -1)
          break;

      // eslint-disable-next-line no-plusplus
      sum++;
      pos = foundPos + 1;
  }

  return sum;

};


