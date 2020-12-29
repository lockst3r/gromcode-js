export const addImage = (imgSrc, callback) => {
  const createImg = document.createElement("img");
  createImg.setAttribute("alt", "My photo");
  createImg.src = imgSrc;
  const getItemPage = document.querySelector(".page");
  getItemPage.append(createImg);

  const onImageLoaded = () => {
    const { width, height } = createImg;
    callback(null, { width, height });
  };
  createImg.addEventListener("load", onImageLoaded);
  createImg.addEventListener("error", () =>
    callback("Image load is failed...")
  );
};

const imgSrc =
  "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg";

const onImageLoaded = (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  const { width, height } = data;
  const sizeElem = document.querySelector(".image-size");
  sizeElem.textContent = `${width} x ${height}`;
};
addImage(imgSrc, onImageLoaded);
