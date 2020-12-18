/* eslint-disable eqeqeq */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

"use strict";

// input function
// output function

function defer(func, ms) {
  return function () {
    // eslint-disable-next-line prefer-rest-params
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

export { defer };
