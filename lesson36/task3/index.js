/* eslint-disable no-alert */
/* eslint-disable import/extensions */
import { fetchUserData, fetchRepositories } from "./src/scripts/gateways.js";
import { renderUserData } from "./src/scripts/user.js";
import { renderRepos, cleanReposList } from "./src/scripts/repos.js";
import { showSpinner, hideSpinner } from "./src/scripts/spinner.js";

const defultUser = {
  avatar_url: "https://avatars3.githubusercontent.com/u10001",
  name: "",
  location: "",
};

renderUserData(defultUser);

const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

const onSearchUser = async () => {
  try {
    showSpinner();
    cleanReposList();
    const userName = userNameInputElem.value;
    const userData = await fetchUserData(userName);
    renderUserData(userData);
    const reposList = await fetchRepositories(userData.repos_url);
    renderRepos(reposList);
  } catch (err) {
    alert(err.message);
  } finally {
    hideSpinner();
  }
};

showUserBtnElem.addEventListener("click", onSearchUser);
