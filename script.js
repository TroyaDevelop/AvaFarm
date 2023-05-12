'use strict';

window.addEventListener("orientationchange", function() {
    if (Math.abs(window.orientation) !== 0) {
        // Запрещаем поворот экрана
        document.body.style.transform = "rotate(0deg)";
        document.body.style.webkitTransform = "rotate(0deg)";
        document.body.style.mozTransform = "rotate(0deg)";
        document.body.style.msTransform = "rotate(0deg)";
        document.body.style.oTransform = "rotate(0deg)";
        document.body.style.position = "fixed";
        document.body.style.width = "100%";
        document.body.style.height = "100%";
        document.body.style.top = "0";
        document.body.style.left = "0";
        document.body.style.right = "0";
        document.body.style.bottom = "0";
        // Показываем сообщение об ошибке
        alert("Пожалуйста, не поворачивайте экран!");
    }
});

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