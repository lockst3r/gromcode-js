/* eslint-disable strict */
// eslint-disable-next-line strict
// eslint-disable-next-line lines-around-directive
'use strict';


// input arr
// output number


export  const getMinSquaredNumber = (arr) => {
  const modul = arr.map((el) => Math.abs(el));
  const minNumber = Math.min(...modul);
  return minNumber * minNumber;
};
