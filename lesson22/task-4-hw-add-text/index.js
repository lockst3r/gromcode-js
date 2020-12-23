/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-alert */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
// eslint-disable-next-line lines-around-directive

const getItemBtn = document.querySelector(".search__btn");
const getItemInput = document.querySelector(".search__input");

const showText = () => {
  const text = getItemInput.value;
  console.log(text);
};
getItemBtn.addEventListener("click", showText);

// outerText
