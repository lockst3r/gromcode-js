/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
// eslint-disable-next-line lines-around-directive

export const setTitle = (text) => {
  const titleElem = document.querySelector(".title");
  titleElem.textContent = `${text}`;
};
