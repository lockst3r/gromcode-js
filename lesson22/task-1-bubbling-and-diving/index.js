/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
// eslint-disable-next-line lines-around-directive

const getItemDiv = document.querySelector(".rect_div");
const getItemP = document.querySelector(".rect_p");
const getItemSpan = document.querySelector(".rect_span");
const getItemClean = document.querySelector(".clear-btn");
const getItemEventList = document.querySelector(".events-list");
const getItemRemoveHandlersBtn = document.querySelector(".remove-handlers-btn");
const getItemAttachHandlersBtn = document.querySelector(".attach-handlers-btn");

const clearSquare = () => {
  getItemEventList.innerHTML = "";
};

const logTarget = (text, color) => {
  getItemEventList.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const logDivGreen = logTarget.bind(null, "Div", "green");
const logPGreen = logTarget.bind(null, "P", "green");
const logSpanGreen = logTarget.bind(null, "Span", "green");

const logDivGrey = logTarget.bind(null, "Div", "grey");
const logPGrey = logTarget.bind(null, "P", "grey");
const logSpanGrey = logTarget.bind(null, "Span", "grey");

getItemDiv.addEventListener("click", logDivGrey, true);
getItemP.addEventListener("click", logPGrey, true);
getItemSpan.addEventListener("click", logSpanGrey, true);

getItemDiv.addEventListener("click", logDivGreen);
getItemP.addEventListener("click", logPGreen);
getItemSpan.addEventListener("click", logSpanGreen);

const attachHandlers = () => {
  getItemDiv.addEventListener("click", logDivGrey, true);
  getItemP.addEventListener("click", logPGrey, true);
  getItemSpan.addEventListener("click", logSpanGrey, true);

  getItemDiv.addEventListener("click", logDivGreen);
  getItemP.addEventListener("click", logPGreen);
  getItemSpan.addEventListener("click", logSpanGreen);
};

const removeHandlers = () => {
  getItemDiv.removeEventListener("click", logDivGrey, true);
  getItemP.removeEventListener("click", logPGrey, true);
  getItemSpan.removeEventListener("click", logSpanGrey, true);

  getItemDiv.removeEventListener("click", logDivGreen);
  getItemP.removeEventListener("click", logPGreen);
  getItemSpan.removeEventListener("click", logSpanGreen);
};

getItemClean.addEventListener("click", clearSquare);
getItemRemoveHandlersBtn.addEventListener("click", removeHandlers);
getItemAttachHandlersBtn.addEventListener("click", attachHandlers);
