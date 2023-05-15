'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const body = new Image();
body.src = './img/body.png';
const underwear = new Image();
underwear.src = './img/underwear.png';
const hair = new Image();
hair.src = './img/hair1.png';
const eyes = new Image();
eyes.src = './img/eye1.png';
const mouth = new Image();
mouth.src = './img/mouth1.png';

body.onload = function() {
  draw();
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(body, 250, -40, 277, 690);
  ctx.drawImage(underwear, 250, -40, 277, 690);
  ctx.drawImage(hair, 250, -40, 277, 690);
  ctx.drawImage(eyes, 250, -40, 277, 690);
  ctx.drawImage(mouth, 250, -40, 277, 690);
}

function changeHair(imageUrl) {
  hair.src = imageUrl;
  hair.onload = function() {
    draw();
  };
}

function changeEyes(imageUrl) {
  eyes.src = imageUrl;
  eyes.onload = function() {
    draw();
  };
}

function changeMouth(imageUrl) {
  mouth.src = imageUrl;
  mouth.onload = function() {
    draw();
  };
}