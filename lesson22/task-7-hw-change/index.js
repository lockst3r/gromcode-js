/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-alert */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
// eslint-disable-next-line lines-around-directive

const getItemInput = document.querySelector(".text-input");

const showText = (event) => {
  const text = event.target.value;
  console.log(text);
};

getItemInput.addEventListener("change", showText);

// outerText
