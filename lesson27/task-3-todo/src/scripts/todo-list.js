/* eslint-disable import/extensions */
import { onCreateTask } from "./create-task.js";
import { onToggleTask } from "./update-task.js";

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector(".create-task-btn");
  createBtnElem.addEventListener("click", onCreateTask);

  const todoListElem = document.querySelector(".list");
  todoListElem.addEventListener("click", onToggleTask);
};
