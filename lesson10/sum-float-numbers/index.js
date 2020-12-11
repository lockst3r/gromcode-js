/* eslint-disable eqeqeq */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

'use strict'


// input arr
// output arr

const yyyy = [33, 22.44, 888, 44.66]

const  getTotalPrice = (arr) => {

const sum = arr.reduce((acc, el) => acc + el);
const rounding = '$' + Math.floor(sum * 100) / 100;
return rounding;
}



// const getTotalPrice = (arr) => '$' + arr.reduce((acc, el)=> acc + el).toFixed(2);

console.log(getTotalPrice(yyyy));