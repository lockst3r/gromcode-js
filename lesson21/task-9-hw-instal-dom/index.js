/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
// eslint-disable-next-line lines-around-directive

export const finishForm = () => {
  const getItemLoginForm = document.querySelector(".login-form");
  const getItemInputPassword = document.querySelector('input[name="password"]');
  const createItenInput = document.createElement("input");
  createItenInput.setAttribute("name", "login");
  getItemInputPassword.setAttribute("type", "password");
  createItenInput.setAttribute("type", "text");
  getItemLoginForm.prepend(createItenInput);
};

