/* eslint-disable strict */
/* eslint-disable no-unused-vars */

'use strict'

// input arr
// output object

function buildObject (keysList , valuesList) {
  const result = {};
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < keysList.length; i++) {
      result[keysList[i]] = valuesList[i];
  }
  return result;
};