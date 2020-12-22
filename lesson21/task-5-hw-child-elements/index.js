/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
// eslint-disable-next-line lines-around-directive

export const setButton = (buttonText) => {
  const getItemBody = document.querySelector("body");
  getItemBody.innerHTML = `<button>${buttonText}</button>`;
};
