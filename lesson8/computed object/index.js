/* eslint-disable strict */
/* eslint-disable no-unused-vars */

'use strict'

// input obj
// output

function addPropertyV1(obj, key, value) {
  // eslint-disable-next-line no-param-reassign
  obj[key] = value;
  return obj;
}

function addPropertyV2(obj, key, value) {
  Object.assign(obj, { [key]: value });
  return obj;
}

function addPropertyV3(obj, key, value) {
  const result = { ...obj};
  Object.assign(result, { [key]: value });
  return result;
}

function addPropertyV4(obj, key, value) {
  const copyObj = { ...obj};
  const result = { ...copyObj, ...{ [key]: value } };

  return result;
}