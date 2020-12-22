/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
// eslint-disable-next-line lines-around-directive

export const createButton = (buttonText) => {
const getItemBody = document.querySelector('body');
const createItemButton = document.createElement('button');
createItemButton.textContent(`${buttonText}`);
getItemBody.append(createButton);
}

createButton();