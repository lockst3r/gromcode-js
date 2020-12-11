/* eslint-disable radix */
/* eslint-disable eqeqeq */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

"use strict";

// input arr
// output num

const numberyy = -55.66;

const getMaxAbsoluteNumber = (arr) => {
if(arr.length == 0){
return null;
// eslint-disable-next-line no-else-return
}else{
const getModul = arr.map(el => Math.abs(el));
return Math.max(...getModul);
}
}

// eslint-disable-next-line no-undef
console.log(multiRound(numberyy));
