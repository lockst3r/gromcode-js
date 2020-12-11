/* eslint-disable eqeqeq */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

"use strict";

// input string, number
// output array

const splitString = (string, n) => {
  if (typeof string !== "string") {
    return null;
  }

  const result = [];

  let startPosition = 0;
  // eslint-disable-next-line no-param-reassign
  n = n || 10;
  while (true) {
    const chunk = string.substr(startPosition, n);
    if (chunk.length === 0) {
      break;
    }
    result.push(chunk);
    startPosition += n;
  }

  if (result[result.length - 1].length !== n) {
    const lack = n - result[result.length - 1].length;
    const point = ".";
    const theEnd = result[result.length - 1] + point.repeat(lack);
    result.pop(result[result.length - 1]);
    result.push(theEnd);
  }

  return result;
};

console.log(splitString("grhrhrhrhrhrggvfvff"));

/* const result = ['asss', 'sdsd', 'sfef', 'rr'];
const n = 4;
if(result[result.length-1].length !== n){
  const lack = n - result[result.length-1].length;
  const point = ".";
  const theEnd = result[result.length-1] + point.repeat(lack);
  result.pop(result[result.length-1]);
  result.push(theEnd);
  }
  console.log(result);






//const n = 2;
//if(result[result.length-1] !== n){
//const nehvata = result[result.length-1] - n;
//}
//const tochka = ".";
//const repeat = result[result.length-1] + tochka.repeat(n);
//console.log(repeat);

*/
