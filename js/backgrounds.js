const images = [
    "0.jpeg","1.jpeg","2.jpeg","3.png"
];
const body = document.querySelector("body");

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);