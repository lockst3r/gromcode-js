/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
// eslint-disable-next-line lines-around-directive

const createButton = (buttonText) => {
  const getItemBody = document.querySelector("body");
  const createItemButton = document.createElement("button");
  createItemButton.textContent = `${buttonText}`;
  getItemBody.append(createItemButton);
};

createButton();
