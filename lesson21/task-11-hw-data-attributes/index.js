/* eslint-disable no-restricted-properties */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
// eslint-disable-next-line lines-around-directive

/* export const squaredNumbers = () => {
  const getItemsNumber = document.querySelectorAll(".number");
  [...getItemsNumber].forEach(
    (el) => (el.dataset.squaredNumbers = Math.pow(el.dataset.number, 2))
  );
};
*/

export const squaredNumbers = () => {
  const getItemsNumber = document.querySelectorAll('.number');
  [...getItemsNumber].forEach((el) => {
    const num = el.dataset.number;
    el.dataset.squaredNumber = num * num;
  });
}


