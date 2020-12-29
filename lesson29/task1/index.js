/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
export const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement("img");
  imgElem.setAttribute("alt", "My photo");
  imgElem.src = imgSrc;

  const getItemPage = document.querySelector(".page");
  getItemPage.append(imgElem);

  const onImageLoaded = () => {
    const { width, height } = imgElem;
    callback(null, { width, height });
  };
  imgElem.addEventListener("load", onImageLoaded);
  imgElem.addEventListener("error", () => callback("Image load is failed..."));
};

const onImageLoaded = (error, data) => {
  if (error) {
    return error;
  }
  const { width, height } = data;
  const sizeElem = document.querySelector(".image-size");
  sizeElem.textContent = `${width} x ${height}`;
};

addImage("https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg", onImageLoaded);
