const getItemCounter = document.querySelector(".counter");
const getItemCouterValue = document.querySelector(".counter__value");

const onCounterChange = (e) => {
  const isButton = e.target.classList.contains("counter__button");

  if (!isButton) {
    return;
  }
  const action = e.target.dataset.action;
  const oldValue = Number(getItemCouterValue.textContent);

  const newValue = (getItemCouterValue.textContent =
    action === "decrease" ? oldValue - 1 : oldValue + 1);

  localStorage.setItem("counterValue", newValue);

  getItemCouterValue.textContent = newValue;
};
getItemCounter.addEventListener("click", onCounterChange);

const onStorageChange = (e) => {
  getItemCouterValue, (textContent = e.newValue);
};

window.addEventListener("storage", onStorageChange);
