/* eslint-disable consistent-return */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
// eslint-disable-next-line lines-around-directive

const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const renderListItems = (listItems) => {
  const listElem = document.querySelector(".list");
  const listItemsElems = listItems
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      const checkboxElem = document.createElement("input");
      checkboxElem.setAttribute("type", "checkbox");
      checkboxElem.setAttribute("data-id", `${Math.random()}`);
      checkboxElem.checked = done;
      checkboxElem.classList.add("list__item-checkbox");
      listItemElem.append(checkboxElem, text);

      return listItemElem;
    });

  listElem.append(...listItemsElems);
};

const addTask = (event) => {
  const getInputElem = document.querySelector(".task-input");
  const getlistItemElems = document.querySelectorAll(".list__item");
  const getInputTaskElem = document.querySelector(".task-input");

  if (getInputElem.value === "") {
    return;
  }

  const task = {
    text: getInputElem.value,
    done: false,
  };

  tasks.push(task);
  getlistItemElems.forEach((el) => el.remove());
  getInputTaskElem.value = "";
  renderListItems(tasks);
};

const getItemBtn = document.querySelector(".create-task-btn");
getItemBtn.addEventListener("click", addTask);

const getUlElem = document.querySelector(".list");

const changeTask = (event) => {
  const isCheckbox = event.target.classList.contains("list__item-checkbox");

  if (!isCheckbox) {
    return;
  }

  const checkboxId = event.target.dataset.id;
  const checkbox = document.querySelector(`[data-id="${checkboxId}"]`);
  const getListItem = checkbox.closest(".list__item");

  return checkbox.checked
    ? getListItem.classList.add("list__item_done")
    : getListItem.classList.remove("list__item_done");
};

getUlElem.addEventListener("click", changeTask);

renderListItems(tasks);
