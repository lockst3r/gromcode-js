/* eslint-disable eqeqeq */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

'use strict'


// input number number 
// output arr

const superRound = (num, n) =>{
const result = [];


result.push(Math.floor(num * 10 ** n) / 10 ** n);
result.push(Math.round(num * 10 ** n) / 10 ** n);
result.push(Math.ceil(num * 10 ** n) / 10 ** n);
result.push(Math.trunc(num * 10 ** n) / 10 ** n);
result.push(+num.toFixed(n));

return result;
}