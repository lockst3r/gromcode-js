/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
// eslint-disable-next-line lines-around-directive

export const manageClasses = () => {
  const getItemOne = document.querySelector(".one");
  const getItemTwo = document.querySelector(".two");
  const getItemThree = document.querySelector(".three");
  const getItemFour = document.querySelector(".four");

  getItemOne.classList.add("selected");
  getItemTwo.classList.remove("selected");
  getItemThree.classList.toggle("three_done");
  if (getItemFour.classList.contains("some-class")) {
    getItemFour.classList.add("another-class");
  }
};

