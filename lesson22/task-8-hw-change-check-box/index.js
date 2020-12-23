/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-alert */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
// eslint-disable-next-line lines-around-directive

const getItemInput = document.querySelector(".task-status");

const showCheckbox = (event) => {
  const result = event.target.checked ? true : false;
  console.log(result);
};

getItemInput.addEventListener("change", showCheckbox);

// outerText
