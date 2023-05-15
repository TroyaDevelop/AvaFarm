'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const sprites = {
  background: new Image(),
  editor: new Image(),
  frames: new Image(),
  genderM: new Image(),
  genderF: new Image(),
  eyescolor: new Image(),
  bodyF: new Image(),
  underwearF: new Image(),
  hair: new Image(),
  eyes: new Image(),
  mouth: new Image(),

  init(){
    this.background.src = './img/background.png';
    this.editor.src = './img/editor.png';
    this.frames.src = './img/frames.png';
    this.genderM.src =  './img/genderM.png';
    this.genderF.src =  './img/genderF.png';
    this.eyescolor.src = './img/eyescolor.png';
    this.bodyF.src = './img/body.png';
    this.underwearF.src = './img/underwear.png';
    this.hair.src = './img/hair1.png';
    this.eyes.src = './img/eye1.png';
    this.mouth.src = './img/mouth1.png';
  },
};

const game = {
  sprites,

  x: null,
  y: null,
  gender: 0,
  eyescolor: 0,

  init(){
    this.sprites.init();
    this.render();
  },

  drawChar(){
    ctx.drawImage(this.sprites.bodyF, 755, 167, 277/1.6, 630/1.5);
    ctx.drawImage(this.sprites.underwearF, 755, 167, 277/1.6, 630/1.5);
    ctx.drawImage(this.sprites.hair, 755, 167, 277/1.6, 630/1.5);
    ctx.drawImage(this.sprites.eyes, 755, 167, 277/1.6, 630/1.5);
    ctx.drawImage(this.sprites.mouth, 755, 167, 277/1.6, 630/1.5);
  },

  drawEditor(){
    ctx.drawImage(this.sprites.background, 0, 0, 1920/2, 1300/2);
    ctx.drawImage(this.sprites.editor, 0, 0, 1920/2, 1300/2);
    ctx.drawImage(this.sprites.frames, 313, 140, 765/2, 782/2);
    ctx.drawImage(this.sprites.eyescolor, 760, 90, 270, 88);

    if(this.gender === 0){
      ctx.drawImage(this.sprites.genderF, 43, 507, 387/2, 274/2);
    } else {
      ctx.drawImage(this.sprites.genderM, 43, 507, 387/2, 274/2);
    }

    if(this.eyescolor === 0){
      this.sprites.eyes.src = './img/eye1.png';
    } else if(this.eyescolor === 1){
      this.sprites.eyes.src = './img/eye2.png';
    } else if(this.eyescolor === 2){
      this.sprites.eyes.src = './img/eye3.png';
    }
  },

  render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.drawEditor();
    this.drawChar();
  },

  changeHair(imageUrl){
    this.sprites.hair.src = imageUrl;
    this.sprites.hair.onload = function() {
      game.render();
    };
  },

  changeMouth(imageUrl){
    this.sprites.mouth.src = imageUrl;
    this.sprites.mouth.onload = function() {
      game.render();
    };
  },

  handleClick(event){
    game.x = event.offsetX;
    game.y = event.offsetY;

    if(this.x <= 106 && this.x >= 55 && this.y <= 406 && this.y >= 355){
      this.gender = 0;
    } else if(this.x <= 144 && this.x >= 107 && this.y <= 398 && this.y >= 358){
      this.gender = 1;
    }

    if(this.x <= 592 && this.x >= 566 && this.y <= 104 && this.y >= 76){
      this.eyescolor = 0;
    } else if(this.x <= 629 && this.x >= 605 && this.y <= 102 && this.y >= 79){
      this.eyescolor = 1;
    } else if(this.x <= 669 && this.x >= 641 && this.y <= 100 && this.y >= 80){
      this.eyescolor = 2;
    };
    this.render();
  },
  
};

canvas.addEventListener("click", event => game.handleClick(event));

game.init();