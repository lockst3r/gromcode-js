/* eslint-disable spaced-comment */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */

const image =
  "https://resheto.net/images/mater/kartinka_motivatsiya_tsitata_9.jpg";

const addImage = (imgSrc) => {
  const p = new Promise((resolve, reject) => {
    const imgElem = document.createElement("img");
    imgElem.setAttribute("alt", "My photo");
    imgElem.src = imgSrc;

    const getItemPage = document.querySelector(".page");
    getItemPage.append(imgElem);

    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };
    imgElem.addEventListener("load", onImageLoaded);
    imgElem.addEventListener("error", () =>
      reject(new Error("Image load is failed..."))
    );
  });

  return p;
};

const resultPromise = addImage(image);

resultPromise.then((data) => console.log(data));
resultPromise.catch((error) => console.log(error));
