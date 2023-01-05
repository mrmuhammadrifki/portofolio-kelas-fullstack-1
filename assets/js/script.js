let images = ["image-1", "image-2", "image-3", "image-4", "image-5", "image-6", "image-7", "image-8", "image-9", "image-10", "image-11"];

const overlay = document.querySelector(".overlay");
const btnPrev = document.querySelector(".prev");
const overlayImage = document.querySelector(".overlay-image");
const btnClose = document.querySelector(".btn-close");

btnClose.addEventListener("click", function () {
  overlay.style.display = "none";
});

let imageLength = images.length;

function onImageOverlay(id) {
  overlay.style.display = "block";
  overlay.style.transition = "0.7s";
  overlayImage.style.animation = "zoomAndFade 1s";
  btnClose.style.animation = "slideDownFade 0.5s 0.5s forwards";
  document.querySelector(".btn-next").style.animation = "fadeCuy 0.5s 0.5s forwards";
  document.querySelector(".btn-prev").style.animation = "fadeCuy 0.5s 0.5s forwards";

  let imageIndex = 0;
  imageIndex = images.indexOf(id);

  overlayImage.style.backgroundImage = `url("assets/img/${images[imageIndex]}.jpg")`;
  overlayImage.id = images[imageIndex];
}

function onImageMoveLeft() {
  const id = overlayImage.id;

  let imageIndex = 0;
  imageIndex = images.indexOf(id);

  if (imageIndex <= 0) imageIndex = imageLength - 1;
  else imageIndex--;

  overlayImage.style.backgroundImage = `url("assets/img/${images[imageIndex]}.jpg")`;
  overlayImage.id = images[imageIndex];
}

function onImageMoveRight() {
  const id = overlayImage.id;

  let imageIndex = 0;

  imageIndex = images.indexOf(id);
  console.log(typeof imageIndex);

  if (imageIndex >= imageLength - 1) imageIndex = 0;
  else imageIndex++;

  console.log(imageIndex);

  overlayImage.style.backgroundImage = `url("assets/img/${images[imageIndex]}.jpg")`;
  overlayImage.id = images[imageIndex];
}
