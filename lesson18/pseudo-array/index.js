/* eslint-disable prefer-rest-params */
/* eslint-disable lines-around-directive */
// eslint-disable-next-line strict
"use strict";

// input arr
// output number

export function sumOfSquares() {
  return [...arguments].reduce((acc, el) => acc + el * el, 0);
}

sumOfSquares();
