localStorage.setItem("name", JSON.stringify({ y: 66, hh: true, uu: "io" }));
localStorage.setItem("frog", JSON.stringify(66));

export const getLocalStorageData = () =>
  Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;

    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }

    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
