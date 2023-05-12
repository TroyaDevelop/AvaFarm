'use strict';

function init(){
  if (window.orientation !== undefined) {
    screen.orientation.lock('landscape');
    
    window.addEventListener('orientationchange', function () {
      if (screen.orientation.type !== 'landscape-primary') {
        alert('Пожалуйста, поверните устройство в альбомную ориентацию');
      }
    });
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