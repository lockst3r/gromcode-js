import { reverseArray } from './index.js';

 it('should test', () => {
  const result = reverseArray([1, 2, 3]);
  expect(result).toEqual([3, 2, 1]);
});