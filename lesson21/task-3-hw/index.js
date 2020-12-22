/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
// eslint-disable-next-line lines-around-directive

export const getTitle = () => {
  const getItemTitle = document.querySelector(".title");
  return getItemTitle.textContent;
};

export const getDescription = () => {
  const getItemDescription = document.querySelector(".about");
  return getItemDescription.innerText;
};

export const getPlans = () => {
  const getItemPlans = document.querySelector(".plans");
  return getItemPlans.innerHTML;
};

export const getGoal = () => {
  const getItemGoal = document.querySelector(".goal");
  return getItemGoal.outerHTML;
};
