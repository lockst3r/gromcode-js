/* eslint-disable prefer-const */
/* eslint-disable eqeqeq */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

function createArrayOfFunctions(num) {
  let arr = [];
  if (num == undefined) {
    return [];
  }
  if (typeof num !== "number") {
    return null;
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < num; i++) {
    // eslint-disable-next-line func-names
    arr[i] = function () {
      return i;
    };
  }
  return arr;
}
console.log(createArrayOfFunctions(5));

export { createArrayOfFunctions };
