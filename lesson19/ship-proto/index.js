/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-rest-params */
/* eslint-disable lines-around-directive */
// eslint-disable-next-line strict
"use strict";

// input obj
// output arr

function getOwnProps(obj) {
  const arr = [];
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== "function") {
      arr.push(prop);
    }
  }
  return arr;
}
