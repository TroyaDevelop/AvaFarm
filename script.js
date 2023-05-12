'use strict';

function init(){
  const widthOutput = 480;

  if(outerWidth <= widthOutput){
    document.body.style.transform = 'rotate(90deg)';
    screen.orientation.lock("landscape");
  }
};

function changeHair(imageUrl) {
    const hair = document.querySelector('.hair');
    hair.style.backgroundImage = `url(${imageUrl})`;
  }

  function changeBrows(imageUrl) {
    const brows = document.querySelector('.brows');
    brows.style.backgroundImage = `url(${imageUrl})`;
  }
  
  function changeEyes(imageUrl) {
    const eyes = document.querySelector('.eyes');
    eyes.style.backgroundImage = `url(${imageUrl})`;
  }
  
  function changeMouth(imageUrl) {
    const mouth = document.querySelector('.mouth');
    mouth.style.backgroundImage = `url(${imageUrl})`;
  }

  init();