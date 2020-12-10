/* eslint-disable strict */
/* eslint-disable no-unused-vars */

'use strict'



const addPropertyV1 = (userData, userId) => {
  // eslint-disable-next-line no-param-reassign
  userData.id = userId;
  return userData;
};

const addPropertyV2 = (userData, userId) => {
  Object.assign(userData, { "id": userId });
  return userData;
};

const addPropertyV3 = (userData, userId) => {
  const result = { ...userData};
  Object.assign(result, { "id": userId });
  return result;
};

const addPropertyV4 = (userData, userId) => {
  const copyObj = { ...userData};
  const result = { ...copyObj, ...{ "id": userId } };

  return result;
};