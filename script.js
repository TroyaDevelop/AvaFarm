'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const editorSprite = new Image();
editorSprite.src = './img/editor.png'
const backgroundSprite = new Image();
backgroundSprite.src = './img/background.png'
const framesSprite = new Image();
framesSprite.src = './img/frames.png'

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
  drawChar();
};

function drawChar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawEditor();
  ctx.drawImage(body, 755, 167, 277/1.6, 630/1.5);
  ctx.drawImage(underwear, 755, 167, 277/1.6, 630/1.5);
  ctx.drawImage(hair, 755, 167, 277/1.6, 630/1.5);
  ctx.drawImage(eyes, 755, 167, 277/1.6, 630/1.5);
  ctx.drawImage(mouth, 755, 167, 277/1.6, 630/1.5);
}

function drawEditor(){
  ctx.drawImage(backgroundSprite, 0, 0, 1920/2, 1300/2);
  ctx.drawImage(editorSprite, 0, 0, 1920/2, 1300/2);
  ctx.drawImage(framesSprite, 313, 140, 765/2, 782/2);
}

function changeHair(imageUrl) {
  hair.src = imageUrl;
  hair.onload = function() {
    drawChar();
  };
}

function changeEyes(imageUrl) {
  eyes.src = imageUrl;
  eyes.onload = function() {
    drawChar();
  };
}

function changeMouth(imageUrl) {
  mouth.src = imageUrl;
  mouth.onload = function() {
    drawChar();
  };
}