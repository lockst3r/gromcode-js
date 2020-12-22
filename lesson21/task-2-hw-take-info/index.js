/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
// eslint-disable-next-line lines-around-directive

export function getItemsList() {
  const elementsList = document.querySelectorAll(".technology");
  console.dir(elementsList);
  return elementsList;
}

export function getItemsArray() {
  const elementsArray = document.querySelectorAll(".tool");
  const getArray = Array.from(elementsArray);
  console.dir(getArray);
  return getArray;
}
