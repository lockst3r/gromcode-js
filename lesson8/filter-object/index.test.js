// eslint-disable-next-line import/extensions
import { getAdults } from './index.js';

 it('should test', () => {
  const result = getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 });
  expect(result).toEqual({ 'John Doe': 19, 'Bob': 18 });
}); 