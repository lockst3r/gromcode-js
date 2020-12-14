/* eslint-disable eqeqeq */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

"use strict";

// input arr
// output arr
/*
const cleanTransactionsList = (arr) => arr.map(el => "$" + parseFloat(el).toFixed(2));
*/




const gg = ['  1.9 ', '16.4', 17, ' 1 dollar '];

const cleanTransactionsList = (arr) => {
// eslint-disable-next-line no-restricted-globals
const filter =  arr.map(el => +el).filter(el=> !isNaN(el));
return filter.map(el => "$" + el.toFixed(2))
} 

console.log(cleanTransactionsList(gg));