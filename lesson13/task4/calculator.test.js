// eslint-disable-next-line import/extensions
import { calc } from "./calculator.js";


it('should test', () => {
  const result = calc("2 + 3");
  expect(result).toEqual("2 + 3 = 5");
});

it('should test', () => {
  const result = calc("3 - 3");
  expect(result).toEqual("3 - 3 = 0");
});

it('should test', () => {
  const result = calc("2 * 3");
  expect(result).toEqual("2 * 3 = 6");
});

it('should test', () => {
  const result = calc("3 / 3");
  expect(result).toEqual("3 / 3 = 1");
});








