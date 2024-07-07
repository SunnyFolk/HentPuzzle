const hentImgs = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.jpg",
  "img/9.jpg",
];

const puzzleContainer = document.createElement("div");
puzzleContainer.classList.add("puzzle-container");

const body = document.querySelector("body");
body.appendChild(puzzleContainer);

for (let i = 0; i < 10; i++) {
  const imgKey = Math.round(Math.random() * (hentImgs.length - 1));
  const puzzleItem = createFullItem(hentImgs[imgKey]);
  puzzleContainer.appendChild(puzzleItem);
}

function createImage(src) {
  const image = document.createElement("img");
  image.classList.add("puzzle-img", "fl");
  image.src = src;
  image.onclick = function (event) {
    image.classList.toggle("fl");
  };
  return image;
}

function createItem(img) {
  const puzzleItem = document.createElement("div");
  puzzleItem.classList.add("puzzle-item");
  puzzleItem.appendChild(img);
  return puzzleItem;
}

function createFullItem(src) {
  const puzzleImg = createImage(src);
  return createItem(puzzleImg);
}
