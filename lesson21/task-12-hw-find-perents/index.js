/* eslint-disable no-restricted-properties */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
// eslint-disable-next-line lines-around-directive

export const getSection = (num) => {
  const getItemSpan = document.querySelector(`span[data-number="${num}"]`);
  const getItemDiv = getItemSpan.closest(".box");
  return getItemDiv.dataset.section;
};
