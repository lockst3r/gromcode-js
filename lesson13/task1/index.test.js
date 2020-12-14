/* eslint-disable eqeqeq */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

"use strict";

it('should test', () => {
  expect(17).toEqual(17);

});

it('should test', () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = (numbers) => numbers.filter(el => el % 2 == 0);

it('should test', () => {
  
  const result = getEvenNumbers([1, 2, 3, 4]);
  expect(result).toEqual([2, 4]);
});

