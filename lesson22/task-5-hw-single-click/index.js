/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-alert */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
// eslint-disable-next-line lines-around-directive

const getItemBtn = document.querySelector(".single-use-btn");

const showClicked = (event) => {
  console.log("clicked");
  getItemBtn.removeEventListener("click", showClicked);
};

getItemBtn.addEventListener("click", showClicked);

// outerText
