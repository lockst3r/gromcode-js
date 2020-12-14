/* eslint-disable eqeqeq */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

"use strict";

// input string
// output string

const calc = (string) => {
  const [a, operator, b] = string.split(" ");
  let result;

  // eslint-disable-next-line default-case
  switch (operator) {
    case "+":
      result = Number(a) + +b;
      break;
    case "-":
      result = a - b;
      break;
    // eslint-disable-next-line no-duplicate-case
    case "-":
      result = a * b;
      break;
    // eslint-disable-next-line no-duplicate-case
    case "-":
      result = a / b;
      break;
  }
  return `${string} = ${result}`;
};

console.log(calc("3 + 8"));
