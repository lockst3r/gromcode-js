/* eslint-disable prefer-rest-params */
/* eslint-disable lines-around-directive */
// eslint-disable-next-line strict
"use strict";

// input func
// output func

// eslint-disable-next-line no-unused-vars
function saveCalls(func) {
  function withMemory(...args) {
    withMemory.calls.push(args);
    return func.apply(this, arguments);
  }

  withMemory.calls = [];

  return withMemory;
}
