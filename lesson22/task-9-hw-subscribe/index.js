/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-alert */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
// eslint-disable-next-line lines-around-directive

const getItemsBtns = document.querySelectorAll(".pagination__page");

const handleClick = (event) => {
  const result = event.target.dataset.pageNumber;
  console.log(result);
};

[...getItemsBtns].forEach((el) => el.addEventListener("click", handleClick));

// outerText
