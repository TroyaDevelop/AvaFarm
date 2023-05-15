'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const sprites = {
  background: new Image(),
  editor: new Image(),
  frames: new Image(),
  categories: new Image(),
  genderM: new Image(),
  genderF: new Image(),
  eyesPalette: new Image(),
  mouthPalette: new Image(),
  bodyF: new Image(),
  underwearF: new Image(),
  hair: new Image(),
  eyes: new Image(),
  mouth: new Image(),

  init(){
    this.background.src = './img/background.png';
    this.editor.src = './img/editor.png';
    this.frames.src = './img/frames.png';
    this.categories.src = './img/categories.png';
    this.genderM.src =  './img/genderM.png';
    this.genderF.src =  './img/genderF.png';
    this.eyesPalette.src = './img/eyescolor.png';
    this.mouthPalette.src = './img/mouthcolor.png';
    this.bodyF.src = './img/body.png';
    this.underwearF.src = './img/underwear.png';
    this.hair.src = './img/hair1.png';
    this.eyes.src = './img/eye1.png';
    this.mouth.src = './img/mouth1.png';
  },
};

const editor = {
  sprites,

  x: null,
  y: null,
  gender: 0,
  currentPalette: 0,
  eyesPalette: {
    currentColor: 0,
    eye1: {
      xRigth: 592,
      xLeft: 566,
      yBottom: 104,
      yTop: 76,
    },
    eye2: {
      xRigth: 629,
      xLeft: 605,
      yBottom: 102,
      yTop: 79,
    },
    eye3: {
      xRigth: 669,
      xLeft: 631,
      yBottom: 100,
      yTop: 80,
    },
  },
  mouthPalette: {
    currentColor: 0,
    mouth1: {
      xRigth: 592,
      xLeft: 566,
      yBottom: 104,
      yTop: 76,
    },
    mouth2: {
      xRigth: 629,
      xLeft: 605,
      yBottom: 102,
      yTop: 79,
    },
    mouth3: {
      xRigth: 669,
      xLeft: 631,
      yBottom: 100,
      yTop: 80,
    },
  },

  init(){
    this.sprites.init();
    this.render();
  },

  handleClick(event){
    editor.x = event.offsetX;
    editor.y = event.offsetY;

    if(this.x <= 106 && this.x >= 55 && this.y <= 406 && this.y >= 355){
      this.gender = 0;
    } else if(this.x <= 144 && this.x >= 107 && this.y <= 398 && this.y >= 358){
      this.gender = 1;
    }

    if(this.x <= 175 && this.x >= 28 && this.y <= 332 && this.y >= 114 ){
      this.changeCategory(this.x, this.y);
    }

    if(this.x <= 673 && this.x >= 560 && this.y <= 112 && this.y >= 70 && this.currentPalette === 0){
      this.changeEyesColor(this.x, this.y);
    }

    if(this.x <= 673 && this.x >= 560 && this.y <= 112 && this.y >= 70 && this.currentPalette === 1){
      this.changeMouthColor(this.x, this.y);
    }

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
    ctx.drawImage(this.sprites.categories, 70, 200, 234/1.5, 314/1.2);
    this.drawPalette();

    if(this.gender === 0){
      ctx.drawImage(this.sprites.genderF, 43, 507, 387/2, 274/2);
    } else {
      ctx.drawImage(this.sprites.genderM, 43, 507, 387/2, 274/2);
    }
  },

  drawPalette(){
    if(this.currentPalette === 0){
      ctx.drawImage(this.sprites.eyesPalette, 770, 95, 270/1.2, 88/1.2);
    } else if(this.currentPalette === 1){
      ctx.drawImage(this.sprites.mouthPalette, 770, 95, 270/1.2, 88/1.2);
    };
  },

  render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.drawEditor();
    this.drawChar();
  },

  changeHair(imageUrl){
    this.sprites.hair.src = imageUrl;
    this.sprites.hair.onload = function() {
      editor.render();
    };
  },

  changeMouth(imageUrl){
    this.sprites.mouth.src = imageUrl;
    this.sprites.mouth.onload = function() {
      editor.render();
    };
  },

  changeCategory(x, y){
    if(x <= 115 && x >= 58 && y <= 187 && y >= 170){
      this.currentPalette = 0;
    } else if(x <= 112 && x >= 58 && y <= 260 && y >= 242){
      this.currentPalette = 1;
    }
  },

  changeMouthColor(x, y){
    if(x <= this.mouthPalette.mouth1.xRigth && x >= this.mouthPalette.mouth1.xLeft && y <= this.mouthPalette.mouth1.yBottom && y >= this.mouthPalette.mouth1.yTop){
      this.mouthPalette.currentColor = 0;
    } else if(x <= this.mouthPalette.mouth2.xRigth && x >= this.mouthPalette.mouth2.xLeft && y <= this.mouthPalette.mouth2.yBottom && y >= this.mouthPalette.mouth2.yTop){
      this.mouthPalette.currentColor = 1;
    } else if(x <= this.mouthPalette.mouth3.xRigth && x >=this.mouthPalette.mouth3.xLeft && y <= this.mouthPalette.mouth3.yBottom && y >= this.mouthPalette.mouth3.yTop){
      this.mouthPalette.currentColor = 2;
    };

    if(this.mouthPalette.currentColor === 0){
      this.sprites.mouth.src = './img/mouth1.png';
    } else if(this.mouthPalette.currentColor === 1){
      this.sprites.mouth.src = './img/mouth2.png';
    } else if(this.mouthPalette.currentColor === 2){
      this.sprites.mouth.src = './img/mouth3.png';
    }
  },
  changeEyesColor(x, y){
    if(x <= this.eyesPalette.eye1.xRigth && x >= this.eyesPalette.eye1.xLeft && y <= this.eyesPalette.eye1.yBottom && y >= this.eyesPalette.eye1.yTop){
      this.eyesPalette.currentColor = 0;
    } else if(x <= this.eyesPalette.eye2.xRigth && x >= this.eyesPalette.eye2.xLeft && y <= this.eyesPalette.eye2.yBottom && y >= this.eyesPalette.eye2.yTop){
      this.eyesPalette.currentColor = 1;
    } else if(x <= this.eyesPalette.eye3.xRigth && x >= this.eyesPalette.eye3.xLeft && y <= this.eyesPalette.eye3.yBottom && y >= this.eyesPalette.eye3.yTop){
      this.eyesPalette.currentColor = 2;
    };

    if(this.eyesPalette.currentColor === 0){
      this.sprites.eyes.src = './img/eye1.png';
    } else if(this.eyesPalette.currentColor === 1){
      this.sprites.eyes.src = './img/eye2.png';
    } else if(this.eyesPalette.currentColor === 2){
      this.sprites.eyes.src = './img/eye3.png';
    }
  },
  }

const game = {

};

canvas.addEventListener("click", event => editor.handleClick(event));

editor.init();