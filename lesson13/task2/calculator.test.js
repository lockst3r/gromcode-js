import getSum, { getSquaredArray, getOddNumbers } from "./calculator";

it('should test', () => {
  
  const result = getSquaredArray([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});


it('should test', () => {
  
  const result = getOddNumbers([1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 3, 5]);
});



it('should test', () => {
  
  const result = getSum(1, 2);
  expect(result).toEqual(3);
});