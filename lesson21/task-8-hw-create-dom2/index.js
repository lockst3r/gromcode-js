/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
// eslint-disable-next-line lines-around-directive

export const finishList = () => {
  const getItemList = document.querySelector(".list");
  const getItemLiSpeacial = document.querySelector(".special");
  const createItemLiOne = document.createElement("li");
  createItemLiOne.textContent = "1";
  getItemList.prepend(createItemLiOne);
  const createItemLiFour = document.createElement("li");
  createItemLiFour.textContent = "4";
  getItemLiSpeacial.before(createItemLiFour);
  const createItemLiSix = document.createElement("li");
  createItemLiSix.textContent = "6";
  getItemLiSpeacial.after(createItemLiSix);
  const createItemLiEight = document.createElement("li");
  createItemLiEight.textContent = "8";
  getItemList.append(createItemLiEight);
};

finishList();
