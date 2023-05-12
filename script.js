'use strict';

function handleResize() {
  if (window.innerWidth < window.innerHeight) {
    document.body.style.transform = "rotate(0deg)";
    alert("Пожалуйста, поверните устройство в портретный режим.");
  }
}

window.addEventListener("resize", handleResize, false);

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