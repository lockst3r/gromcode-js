/* eslint-disable eqeqeq */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */



export function makeCounter (){
let count = 0;

return function(){
// eslint-disable-next-line no-plusplus
return count++;
}
}

const count1 = makeCounter();
const count2 = makeCounter();