const images = [
    "Pangong Tso.jpg",
    "Pangong Tso1.jpg",
    "Pangong Tso3.jpg",
    "Pangong Tso4.jpg",
    "Pangong Tso5.jpg"];

const random1 = images[Math.floor(Math.random()*images.length)];
const image = document.createElement("img");
image.src=`./images/${random1}`;

document.body.prepend(image);