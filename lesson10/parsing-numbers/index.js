/* eslint-disable radix */
/* eslint-disable eqeqeq */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

'use strict'


// input arr
// output arr

const numbers = ['33', 22.44, "66 hg"];

const getParsedIntegers = (arr) => arr.map(el => Number.parseInt(el));

const getParsedIntegersV2 = (arr) => arr.map(el => parseInt(el));

const getParsedFloats = (arr) => arr.map(el => Number.parseFloat(el));

const getParsedFloatsV2 = (arr) => arr.map(el => parseFloat(el));


