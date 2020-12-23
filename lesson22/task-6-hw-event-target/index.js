/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-alert */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
// eslint-disable-next-line lines-around-directive

const getItemsBtns = document.querySelectorAll(".btn");

const handleClick = (event) => {
  const text = event.target.textContent;
  console.log(text);
};

[...getItemsBtns].map((el) => el.addEventListener("click", handleClick));

// outerText
