// eslint-disable-next-line import/extensions
import { withdraw } from './index.js';

 it('should test', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});