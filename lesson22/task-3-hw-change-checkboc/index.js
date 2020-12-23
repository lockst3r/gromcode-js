/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-alert */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
// eslint-disable-next-line lines-around-directive

const getItemCheckbox = document.querySelector(".task-status");

const showCheckbox = () => {
  const result = getItemCheckbox.checked ? true : false;
  console.log(result);
};
getItemCheckbox.addEventListener("change", showCheckbox);
