/* eslint-disable eqeqeq */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

'use strict'


// input arr
// output arr

// eslint-disable-next-line arrow-body-style

const numbers = [10, 20.45, Infinity, 55, NaN];

const getFiniteNumbers = (arr) => arr.filter(el => Number.isFinite(el));

// eslint-disable-next-line no-restricted-globals
const getFiniteNumbersV2 = (arr) => arr.filter(el => isFinite(el));

const getNaN = (arr) => arr.filter(el => Number.isNaN(el));

// eslint-disable-next-line no-restricted-globals
const getNaNV2 = (arr) => arr.filter(el => isNaN(el));

const getIntegers = (arr) => arr.filter(el => Number.isInteger(el));

